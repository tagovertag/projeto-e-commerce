import { Imagem_banner, Texto_banner, Titulo_banner } from "./styles"
import { Container } from "../../styles"


type Props = {
  categoria: string
  nome: string
  imagem: string
}

const Banner = ({ categoria, nome, imagem }: Props) => (

  <Imagem_banner style={{ backgroundImage: `url(${imagem})` }}>
    <Container>
      <Titulo_banner>{categoria}</Titulo_banner>
      <Texto_banner>{nome}</Texto_banner>
    </Container>
  </Imagem_banner>
)

export default Banner