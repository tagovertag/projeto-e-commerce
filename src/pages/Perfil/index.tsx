import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BannerPerfil from '../../components/BannerPerfil' 
import ProductList from '../../components/ProductListPerfil'
import Header from '../../components/Header'
import Loader from '../../components/Loader/Loader'


const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
      .catch(() => setRestaurante(null))
      .finally(() => setIsLoading(false))
  }, [id])

  if (isLoading) return <Loader />
  if (!restaurante) return <h3>Restaurante não encontrado</h3>

  return (
    <>
      <Header />
      <BannerPerfil 
        categoria={restaurante.tipo} 
        nome={restaurante.titulo} 
        imagem={restaurante.capa} 
      /> 
      <ProductList itens={restaurante.cardapio} />
    </>
  )
}
export default Perfil