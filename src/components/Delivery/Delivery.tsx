import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setStep, setDeliveryData } from '../../store/reducers/cart'
import * as S from './styles'

type DeliveryValues = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
}

const Delivery = () => {
  const dispatch = useDispatch()

  const form = useFormik<DeliveryValues>({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string().min(8, 'O CEP precisa de 8 dígitos').required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(setDeliveryData({
        receiver: values.receiver,
        address: {
          description: values.address,
          city: values.city,
          zipCode: values.zipCode,
          number: Number(values.number),
          complement: values.complement
        }
      }))
      dispatch(setStep('payment'))
    }
  })

  const renderField = (name: keyof DeliveryValues, label: string) => {
    const error = form.touched[name] && form.errors[name]

    return (
      <S.InputGroup key={name}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type="text"
          {...form.getFieldProps(name)}
          className={error ? 'error' : ''}
        />
        {error && <span className="error-message">{error}</span>}
      </S.InputGroup>
    )
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Header>Entrega</S.Header>

      {renderField('receiver', 'Quem irá receber')}
      {renderField('address', 'Endereço')}
      {renderField('city', 'Cidade')}

      <S.Row>
        {renderField('zipCode', 'CEP')}
        {renderField('number', 'Número')}
      </S.Row>

      {renderField('complement', 'Complemento (opcional)')}

      <S.ButtonContainer>
        <button type="submit">Continuar com o pagamento</button>
        <button type="button" onClick={() => dispatch(setStep('cart'))}>
          Voltar para o carrinho
        </button>
      </S.ButtonContainer>
    </form>
  )
}

export default Delivery
