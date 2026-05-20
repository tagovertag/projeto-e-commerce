import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { HeaderBar, LinkHeader} from "./styles"
import logo from "../../assets/imagens/Home/logo.png"
import { Container } from "../../styles"

import { RootReducer } from '../../store' 
import { open } from '../../store/reducers/cart' 

const Header = () => {
  const dispatch = useDispatch()
  

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderBar>
      <Container>
        <LinkHeader as={Link} to="/">Restaurantes</LinkHeader>
        
        <img src={logo} alt="efood" />
        

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