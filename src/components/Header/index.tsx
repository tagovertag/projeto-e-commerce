import { useDispatch, useSelector } from 'react-redux' // Importe os Hooks
import { Link } from "react-router-dom"

import { HeaderBar, LinkHeader} from "./styles"
import logo from "../../assets/imagens/Home/logo.png"
import { Container } from "../../styles"

import { RootReducer } from '../../store' // Importe o tipo da sua Store
import { open } from '../../store/reducers/cart' // Importe a ação de abrir

const Header = () => {
  const dispatch = useDispatch()
  
  // Pegamos a lista de itens do Redux para contar quantos tem
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderBar>
      <Container>
        <LinkHeader as={Link} to="/">Restaurantes</LinkHeader>
        
        <img src={logo} alt="efood" />
        
        {/* Adicionamos o onClick para abrir o carrinho e a contagem real */}
        <LinkHeader 
          as="span" 
          onClick={() => dispatch(open())} 
          style={{ cursor: 'pointer' }}
        >
          {items.length} produto(s) no carrinho
        </LinkHeader>
      </Container>
    </HeaderBar>
  )
}

export default Header