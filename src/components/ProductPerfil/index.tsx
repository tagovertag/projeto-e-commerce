import Button from './Button';
import { Card, Titulo_Card, Descricao_Card } from './styles';


type Props = {
    titulo: string;
    descricao: string;
    imagem: string;
    onAdd?: React.MouseEventHandler<HTMLButtonElement>
}

const Product = ({ titulo, descricao, imagem, onAdd }: Props) => {
    
    const getDescricao = (descricao: string) => {
        if (descricao.length > 140) {
            return descricao.slice(0, 137) + '...';
        }
        return descricao;
    }

    return (
        <Card>
            <img src={imagem} alt={titulo} />
            <Titulo_Card>{titulo}</Titulo_Card>
            <Descricao_Card>{getDescricao(descricao)}</Descricao_Card>
            <Button onClick={onAdd}>Adicionar ao carrinho</Button>
        </Card>
    )
}

export default Product;