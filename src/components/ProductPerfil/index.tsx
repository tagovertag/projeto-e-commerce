import Button from './Button';
import { Card, Titulo_Card, Descricao_Card } from './styles';

// Definimos o modelo dos dados que vamos receber
type Props = {
    titulo: string;
    descricao: string;
    imagem: string;
}

const Product = ({titulo, descricao, imagem}: Props) => (
    <Card>
      
        <img src={imagem} alt={titulo} />
        
        <Titulo_Card>{titulo}</Titulo_Card>
        
        <Descricao_Card>{descricao}</Descricao_Card>
        <Button>Adicionar ao carrinho</Button>
    </Card>
)

export default Product;