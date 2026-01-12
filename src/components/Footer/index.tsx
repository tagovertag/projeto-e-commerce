import { Footer_Container, Paragrafo_Footer, Rede_Social } from './styles'
import logo from '../../assets/imagens/Perfil/logo.png'
import Instagram from '../../assets/imagens/Perfil/Instagram.png'
import Face from '../../assets/imagens/Perfil/Face.png'
import Twitter from '../../assets/imagens/Perfil/Twitter.png' 
const Footer = () => (
    <Footer_Container>
        <img src={logo} alt="logo" />
        <Rede_Social>
            <img src={Instagram} alt="instagram" />
            <img src={Face} alt="facebook" />
            <img src={Twitter} alt="twitter" />
        </Rede_Social>
        <Paragrafo_Footer> A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.  </Paragrafo_Footer>
        
    </Footer_Container>
)

export default Footer;