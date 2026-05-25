import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { clearCart, close } from '../../store/reducers/cart'

import * as S from './styles'

const Confirmation = () => {
  const dispatch = useDispatch()
  const { orderId } = useSelector((state: RootReducer) => state.cart)

  const handleFinish = () => {
    dispatch(clearCart())
    setTimeout(() => dispatch(close()), 300)
  }

  return (
    <S.FormContainer>
      <S.SuccessIcon>✓</S.SuccessIcon>
      <h3>Pedido Confirmado!</h3>
      
      <S.OrderIdContainer>
        <S.OrderIdLabel>Número do Pedido</S.OrderIdLabel>
        <S.OrderIdValue>{orderId}</S.OrderIdValue>
      </S.OrderIdContainer>

      <S.Message>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </S.Message>

      <S.ButtonContainer>
        <button onClick={handleFinish}>Concluir</button>
      </S.ButtonContainer>
    </S.FormContainer>
  )
}

export default Confirmation
