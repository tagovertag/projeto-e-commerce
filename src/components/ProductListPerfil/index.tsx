import { useState } from 'react' 
import Product from '../ProductPerfil'
import { Container } from '../../styles'
import { List, SectionContainer } from './styles'
import { Modal } from '../Modal' 


interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface Props {
  itens: Prato[] 
}

const ProductList = ({ itens }: Props) => {
  
  const [modalAberta, setModalAberta] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)


  const handleOpenModal = (prato: Prato) => {
    setPratoSelecionado(prato)
    setModalAberta(true)
  }

  return (
    <SectionContainer>
      <Container>
        <List>
          
          {itens.map((pizza) => (
            <div key={pizza.id} onClick={() => handleOpenModal(pizza)}>
              <Product
                titulo={pizza.nome}
                descricao={pizza.descricao}
                imagem={pizza.foto}
              />
            </div>
          ))}
        </List>
      </Container>

      
      <Modal
        visivel={modalAberta}
        fecharModal={() => setModalAberta(false)}
        produto={pratoSelecionado ? {
          foto: pratoSelecionado.foto,
          name: pratoSelecionado.nome,
          descricao: pratoSelecionado.descricao,
          porcao: pratoSelecionado.porcao,
          preco: pratoSelecionado.preco
        } : null}
      />
    </SectionContainer>
  )
}

export default ProductList