import { ChangeEvent, InputHTMLAttributes } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
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

const formatCardNumber = (value: string) =>
  value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()

const onlyDigits = (value: string, max: number) =>
  value.replace(/\D/g, '').slice(0, max)

const Payment = () => {
  const dispatch = useDispatch()
  const { items, delivery } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik<PaymentValues>({
    initialValues: { cardName: '', cardNumber: '', cardCode: '', expMonth: '', expYear: '' },
    onSubmit: async (values) => {
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
        const res = await fetch('https://fake-api-tau.vercel.app/api/eplay/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        const data = await res.json()
        dispatch(setOrderId(data?.orderId || '000000'))
      } catch (error) {
        console.error('Erro no pagamento:', error)
        dispatch(setOrderId('000000'))
      } finally {
        dispatch(setStep('confirm'))
      }
    }
  })

  const renderField = (
    name: keyof PaymentValues,
    label: string,
    extra?: Pick<InputHTMLAttributes<HTMLInputElement>, 'inputMode' | 'maxLength'>
  ) => (
    <S.InputGroup key={name}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...form.getFieldProps(name)} {...extra} />
    </S.InputGroup>
  )

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('cardNumber', formatCardNumber(event.target.value))
  }

  const handleCardCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('cardCode', onlyDigits(event.target.value, 3))
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <h3>Pagamento</h3>
      {renderField('cardName', 'Nome no cartão')}

      <S.Row>
        <S.InputGroup>
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
          />
        </S.InputGroup>

        <S.InputGroup>
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
          />
        </S.InputGroup>
      </S.Row>

      <S.Row>
        {renderField('expMonth', 'Mês de expiração', { inputMode: 'numeric', maxLength: 2 })}
        {renderField('expYear', 'Ano de expiração', { inputMode: 'numeric', maxLength: 4 })}
      </S.Row>

      <S.ButtonContainer>
        <button type="submit">Finalizar pagamento</button>
      </S.ButtonContainer>
    </form>
  )
}

export default Payment
