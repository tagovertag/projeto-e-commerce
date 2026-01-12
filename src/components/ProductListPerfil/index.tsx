import Product from '../ProductPerfil';
import { Container } from '../../styles';
import { List, SectionContainer } from './styles'
import pizza from '../../assets/imagens/Perfil/pizza.png'



const pizzas = [
    {
        id: 1,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        imagem: pizza
    },

    {
        id: 2,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        imagem: pizza
    },

    {
        id: 3,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        imagem: pizza
    },

    {
        id: 4,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        imagem: pizza
    },

    {
        id: 5,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        imagem: pizza
    },

    {
        id: 6,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        imagem: pizza
    }
    
]

type Props = {
    title: string
    
}

const ProductList = ({ title }: Props) => (
    <SectionContainer >
        <Container>
            <List>
                {pizzas.map((pizza) =>
                    <Product
                        key={pizza.id}
                        titulo={pizza.titulo}
                        descricao={pizza.descricao}
                        imagem={pizza.imagem}
                    />
                )}
            </List >
        </Container >
    </SectionContainer>
    

)

export default ProductList