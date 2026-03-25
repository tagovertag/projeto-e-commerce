import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BannerPerfil from '../../components/BannerPerfil' 
import ProductList from '../../components/ProductListPerfil'
import Header from '../../components/Header'


const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<any>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h3>Carregando...</h3>

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