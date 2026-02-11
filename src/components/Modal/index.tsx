import * as S from "./styles";

interface ModalProps {
    visivel: boolean;
    fecharModal: () => void;
    produto: {
        foto: string;
        name: string;
        descricao: string;
        preco: number;
        porcao: string;
    } | null;
}

export const Modal = ({ visivel, fecharModal, produto }: ModalProps) => {
    if (!visivel || !produto) {
        return null;
    }

    return (
        <S.Overlay onClick={fecharModal}>
            <S.ModalBox onClick={(e) => e.stopPropagation()}>
                <S.Foto src={produto.foto} alt={produto.name} />
                <S.DescricaoContainer>
                    <h3>{produto.name}</h3>
                    <p>{produto.descricao}</p>
                    <p>Serve: {produto.porcao}</p>
                    <S.BotaoAdicionar>
                        Adicionar ao carrinho - R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </S.BotaoAdicionar>
                </S.DescricaoContainer>
            </S.ModalBox>

        </S.Overlay>
    )
}