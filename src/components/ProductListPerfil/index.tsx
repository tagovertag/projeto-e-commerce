import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Product from '../ProductPerfil'
import { add, open } from '../../store/reducers/cart'
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
  const dispatch = useDispatch()
  const [modalAberta, setModalAberta] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)


  const handleOpenModal = (prato: Prato) => {
    setPratoSelecionado(prato)
    setModalAberta(true)
  }

  const handleAddProduto = (prato: Prato) => {
    dispatch(add({
      id: prato.id,
      nome: prato.nome,
      foto: prato.foto,
      preco: prato.preco
    }))
    dispatch(open())
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
                onAdd={(e) => {
                  e.stopPropagation()
                  handleAddProduto(pizza)
                }}
              />
            </div>
          ))}
        </List>
      </Container>

      <Modal
        visivel={modalAberta}
        fecharModal={() => setModalAberta(false)}
        produto={pratoSelecionado ? {
          id: pratoSelecionado.id,
          foto: pratoSelecionado.foto,
          nome: pratoSelecionado.nome,
          descricao: pratoSelecionado.descricao,
          porcao: pratoSelecionado.porcao,
          preco: pratoSelecionado.preco
        } : null}
      />
    </SectionContainer>
  )
}

export default ProductList