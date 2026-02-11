import { useEffect, useState } from 'react' 
import { Container } from '../../styles'
import Restaurante from '../Restaurante'
import { List } from './styles'


interface RestauranteAPI {
  id: number
  titulo: string 
  destacado: boolean
  tipo: string 
  avaliacao: number 
  descricao: string 
  capa: string
}

const RestaurantList = () => {

  const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])


  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <section>
      <Container>
        <List>
        
          {restaurantes.map((item) => (
            <Restaurante
              key={item.id}
              id={item.id}
              name={item.titulo} 
              category={item.tipo} 
              information={item.descricao} 
              nota={item.avaliacao.toString()} 
              capa={item.capa}
              destacado={item.destacado}
            />
          ))}
        </List>
      </Container>
    </section>
  )
}

export default RestaurantList