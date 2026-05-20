import { useEffect, useState } from 'react' 
import { Container } from '../../styles'
import Loader from '../Loader/Loader'
import Restaurante from '../Restaurante'
import { List } from './styles'
import type { RestauranteAPI } from '../../types'

const RestaurantList = () => {

  const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch(() => setRestaurantes([]))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <section>
        <Container>
          <Loader />
        </Container>
      </section>
    )
  }

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