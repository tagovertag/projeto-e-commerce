import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { RootReducer } from '../../store'
import { setStep, setOrderId } from '../../store/reducers/cart'
import * as S from './styles'

type PaymentValues = {
  cardName: string
  cardNumber: string
  cardCode: string
  expMonth: string
  expYear: string
}

const validationSchema = Yup.object().shape({
  cardName: Yup.string()
    .required('Nome no cartão é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .matches(/^[a-zA-Z\s]*$/, 'Nome deve conter apenas letras'),
  cardNumber: Yup.string()
    .required('Número do cartão é obrigatório')
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Número do cartão inválido (16 dígitos)'),
  cardCode: Yup.string()
    .required('CVV é obrigatório')
    .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos'),
  expMonth: Yup.string()
    .required('Mês de expiração é obrigatório')
    .matches(/^\d{1,2}$/, 'Mês inválido')
    .test('valid-month', 'Mês deve ser entre 01 e 12', (value) => {
      if (!value) return false
      const month = Number(value)
      return month >= 1 && month <= 12
    }),
  expYear: Yup.string()
    .required('Ano de expiração é obrigatório')
    .matches(/^\d{4}$/, 'Ano deve ter 4 dígitos')
    .test('valid-year', 'Ano de expiração já passou', (value) => {
      if (!value) return false
      const year = Number(value)
      const currentYear = new Date().getFullYear()
      return year >= currentYear
    })
})

const formatCardNumber = (value: string) =>
  value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()

const onlyDigits = (value: string, max: number) =>
  value.replace(/\D/g, '').slice(0, max)

const Payment = () => {
  const dispatch = useDispatch()
  const { items, delivery } = useSelector((state: RootReducer) => state.cart)
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const form = useFormik<PaymentValues>({
    initialValues: { cardName: '', cardNumber: '', cardCode: '', expMonth: '', expYear: '' },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setApiError('')
      setIsLoading(true)

      const payload = {
        products: items.map((i) => ({ id: i.id, price: i.preco })),
        delivery,
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber.replace(/\s/g, ''),
            code: Number(values.cardCode),
            expires: { month: Number(values.expMonth), year: Number(values.expYear) }
          },
          installments: 1
        }
      }

      try {
        const res = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        if (!res.ok) {
          const errorText = await res.text()
          throw new Error(errorText || 'Falha ao processar o pagamento')
        }

        const data = await res.json()
        dispatch(setOrderId(data?.orderId || '000000'))
        dispatch(setStep('confirm'))
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro ao processar o pagamento'
        console.error('Erro no pagamento:', error)
        setApiError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }
  })

  const renderField = (
    name: keyof PaymentValues,
    label: string,
    extra?: Pick<InputHTMLAttributes<HTMLInputElement>, 'inputMode' | 'maxLength'>
  ) => {
    const hasError = form.touched[name] && form.errors[name]
    return (
      <S.InputGroup key={name} hasError={!!hasError}>
        <label htmlFor={name}>{label}</label>
        <input id={name} {...form.getFieldProps(name)} {...extra} disabled={isLoading} />
        {hasError && <span className="error">{form.errors[name]}</span>}
      </S.InputGroup>
    )
  }

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('cardNumber', formatCardNumber(event.target.value))
  }

  const handleCardCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('cardCode', onlyDigits(event.target.value, 3))
  }

  const isFormValid = form.isValid && Object.keys(form.touched).length > 0

  return (
    <form onSubmit={form.handleSubmit}>
      <h3>Pagamento</h3>
      {apiError && <S.ErrorMessage>{apiError}</S.ErrorMessage>}

      {renderField('cardName', 'Nome no cartão')}

      <S.Row>
        <S.InputGroup hasError={form.touched.cardNumber && !!form.errors.cardNumber}>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            id="cardNumber"
            name="cardNumber"
            title="Número do cartão"
            value={form.values.cardNumber}
            onChange={handleCardNumberChange}
            onBlur={form.handleBlur}
            inputMode="numeric"
            maxLength={19}
            disabled={isLoading}
            placeholder="0000 0000 0000 0000"
          />
          {form.touched.cardNumber && form.errors.cardNumber && (
            <span className="error">{form.errors.cardNumber}</span>
          )}
        </S.InputGroup>

        <S.InputGroup hasError={form.touched.cardCode && !!form.errors.cardCode}>
          <label htmlFor="cardCode">CVV</label>
          <input
            id="cardCode"
            name="cardCode"
            title="CVV"
            value={form.values.cardCode}
            onChange={handleCardCodeChange}
            onBlur={form.handleBlur}
            inputMode="numeric"
            maxLength={3}
            disabled={isLoading}
            placeholder="000"
          />
          {form.touched.cardCode && form.errors.cardCode && (
            <span className="error">{form.errors.cardCode}</span>
          )}
        </S.InputGroup>
      </S.Row>

      <S.Row>
        <S.InputGroup hasError={form.touched.expMonth && !!form.errors.expMonth}>
          {renderField('expMonth', 'Mês de expiração', { inputMode: 'numeric', maxLength: 2 })}
        </S.InputGroup>
        <S.InputGroup hasError={form.touched.expYear && !!form.errors.expYear}>
          {renderField('expYear', 'Ano de expiração', { inputMode: 'numeric', maxLength: 4 })}
        </S.InputGroup>
      </S.Row>

      <S.ButtonContainer>
        <button type="submit" disabled={isLoading || !isFormValid}>
          {isLoading ? 'Processando pagamento...' : 'Finalizar pagamento'}
        </button>
      </S.ButtonContainer>
    </form>
  )
}

export default Payment
