import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { HeaderBar, HeaderLogo, LinkHeader} from "./styles"
import logo from "../../assets/imagens/Home/logo.png"
import { Container } from "../../styles"

import { RootReducer } from '../../store' 
import { open } from '../../store/reducers/cart' 

const Header = () => {
  const dispatch = useDispatch()
  

  const { items } = useSelector((state: RootReducer) => state.cart)
  const totalProducts = items.reduce((sum, item) => sum + (item.quantidade ?? 1), 0)

  return (
    <HeaderBar>
      <Container>
        <LinkHeader as={Link} to="/">Restaurantes</LinkHeader>
        
        <HeaderLogo src={logo} alt="efood" />
        

        <LinkHeader 
          as="span" 
          onClick={() => dispatch(open())} 
          style={{ cursor: 'pointer' }}
        >
          {totalProducts} produto(s) no carrinho
        </LinkHeader>
      </Container>
    </HeaderBar>
  )
}

export default Header