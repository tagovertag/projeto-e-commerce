import { Imagem_banner, Texto_banner, Titulo_banner } from "./styles"
import fundo from "../../assets/imagens/Perfil/fundo.png"
import { Container } from "../../styles"
const Banner = () => (
    <Imagem_banner style={{ backgroundImage: `url(${fundo})` }}>
        <Container>
            <Titulo_banner>Italiana</Titulo_banner>
            <Texto_banner>La Dolce Vita Trattoria</Texto_banner>
        </Container>

    </Imagem_banner>
)
export default Banner 