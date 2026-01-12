import { Container } from '../../styles' 
import Restaurante from '../Restaurante' 
import Sushi from '../../assets/imagens/Home/Sushi.png'
import { List } from './styles'
import Massas from '../../assets/imagens/Home/Massas.png'

const restaurantList = [
    {
        id: 1,
        name: 'Hioki Sushi',
        category: 'Japonesa',
        information: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        nota: '4.9',
        capa: Sushi,
        destacado: true
    },

    {
    id: 2,
        name: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        information: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: '4.6',
        capa: Massas,
        destacado: false
    },

    {
    id: 2,
        name: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        information: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: '4.6',
        capa: Massas,
        destacado: false
    },

    {
    id: 2,
        name: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        information: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: '4.6',
        capa: Massas,
        destacado: false
    },

    {
    id: 2,
        name: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        information: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: '4.6',
        capa: Massas,
        destacado: false
    },

    {
    id: 2,
        name: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        information: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: '4.6',
        capa: Massas,
        destacado: false
    },
]

const RestaurantList = () => (
    <section>
        <Container>
            <List>
                {restaurantList.map((item) => (
                    <Restaurante
                        key={item.id}
                        id={item.id}
                        name={item.name ?? ''}
                        category={item.category ?? ''}
                        information={item.information}
                        nota={item.nota ?? ''}
                        capa={item.capa ?? ''}
                        destacado={item.destacado}
                />
                ))}
            </List>
        </Container>
    </section>
);

export default RestaurantList;