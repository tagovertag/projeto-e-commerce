import { useDispatch } from 'react-redux'; // Importamos o disparador
import { add, open } from '../../store/reducers/cart'; // Importamos as ações
import * as S from "./styles";

interface ModalProps {
    visivel: boolean;
    fecharModal: () => void;
    produto: {
        id: number;
        nome: string;
        foto: string;
        descricao: string;
        preco: number;
        porcao: string;
    } | null;
}

export const Modal = ({ visivel, fecharModal, produto }: ModalProps) => {
    const dispatch = useDispatch();

    if (!visivel || !produto) {
        return null;
    }

    // Função para adicionar e já abrir o carrinho
    const adicionarAoCarrinho = () => {
        if (produto) {
            dispatch(add({
                id: produto.id,
                nome: produto.nome,
                foto: produto.foto,
                preco: produto.preco
            }))
            dispatch(open());
            fecharModal();
        }
    };

    return (
        <S.Overlay onClick={fecharModal}>
            <S.ModalBox onClick={(e) => e.stopPropagation()}>
                <S.Foto src={produto.foto} alt={produto.nome} />
                <S.DescricaoContainer>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <p>Serve: {produto.porcao}</p>
                    <S.BotaoAdicionar onClick={adicionarAoCarrinho}>
                        Adicionar ao carrinho - R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </S.BotaoAdicionar>
                </S.DescricaoContainer>
            </S.ModalBox>
        </S.Overlay>
    );
};