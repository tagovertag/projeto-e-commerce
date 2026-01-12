import { HeaderBar, LinkHeader} from "./styles";
import vector  from "../../assets/imagens/Perfil/Vector.png"
import logo from "../../assets/imagens/Perfil/logo.png"
import { Container } from "../../styles";
import { Link } from "react-router-dom";

const Header = () => (
    <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
        <Container>
        
            <LinkHeader as={Link} to="/">Restaurantes</LinkHeader>
        
            <img src={logo} alt="efood" />
            <LinkHeader as="span">0 produtos(s) no carrinho</LinkHeader>
        </Container>


    
        
    </HeaderBar>
) 
export default Header;