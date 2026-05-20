import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, setStep } from '../../store/reducers/cart'

import * as S from './styles'

import Button from '../ProductPerfil/Button'
import Delivery from '../Delivery/Delivery'
import Payment from '../Payment/Payment'
import Confirmation from '../Confirmation/confirmation'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items, step } = useSelector((state: RootReducer) => state.cart)

  if (!isOpen) return null

  const totalPrice = items.reduce((sum, item) => sum + item.preco * (item.quantidade ?? 1), 0)

  const renderCart = () => (
    <>
      {items.length === 0 ? (
        <p className="empty-text">O carrinho está vazio</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <S.CartItem>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                    <span>Quantidade: {item.quantidade}</span>
                  </div>
                  <button type="button" onClick={() => dispatch(remove(item.id))} />
                </S.CartItem>
              </li>
            ))}
          </ul>

          <S.TotalContainer>
            <p>Valor total</p>
            <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
          </S.TotalContainer>

          <Button onClick={() => dispatch(setStep('delivery'))}>Continuar com a entrega</Button>
        </>
      )}
    </>
  )

  const renderStep = () => {
    switch (step) {
      case 'delivery':
        return <Delivery />
      case 'payment':
        return <Payment />
      case 'confirm':
        return <Confirmation />
      default:
        return renderCart()
    }
  }

  return (
    <S.Overlay onClick={() => dispatch(close())}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>{renderStep()}</S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
