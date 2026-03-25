import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import Button from '../ProductPerfil/Button'
const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    console.log('O carrinho está aberto?', isOpen) 
    const dispatch = useDispatch()

    const getTotalPrice = () => {
        return items.reduce((acumulador, item) => {
            return acumulador + item.preco * (item.quantidade ?? 1)
        }, 0)
    }
        if (!isOpen) return null
        return (
                <S.Overlay onClick={() => dispatch(close())} >
                <S.Sidebar onClick={(e) => e.stopPropagation()}>
                {items.length > 0 ? (
                    <>
                        <ul>
                            {items.map((item) => (
                                <S.CartItem key={item.id}>
                                    <img src={item.foto} alt={item.nome} />
                                    <div>
                                        <h3>{item.nome}</h3>
                                        <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                                        <span>Quantidade: {item.quantidade}</span>
                                    </div>
                                    <button onClick={() => dispatch(remove(item.id))} type="button" />
                                </S.CartItem>
                            ))}
                        </ul>
                        <S.TotalContainer>
                            <p>Valor total</p>
                            <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                        </S.TotalContainer>
                        <Button>Continuar com a entrega</Button>
                    </>
                ) : (
                    <p className="empty-text">O carrinho está vazio</p>
                )}
            </S.Sidebar>
            </S.Overlay>
            )
}
export default Cart 