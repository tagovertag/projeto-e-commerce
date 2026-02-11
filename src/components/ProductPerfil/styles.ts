import styled from 'styled-components';
import { Cores } from '../../styles'

export const Card = styled.div`
    background-color: ${Cores.color_salmon};
    padding: 8px;
    padding-bottom: 8px;
    display: flex;           /* Habilita o Flexbox */
    flex-direction: column;  /* Coloca os itens um abaixo do outro */
    height: 100%;            /* Força o card a ocupar toda a altura disponível na linha */

    img {
        display: block;
        width: 100%;
        height: 167px;
        object-fit: cover;
    }
`;

export const Titulo_Card = styled.h3`
    font-weight: 900;
    font-size: 16px;
    color: ${Cores.color_footer};
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const Descricao_Card = styled.p`
    font-weight: 400;
    font-size: 14px;
    display: block;
    line-height: 22px;
    color: ${Cores.color_footer};
    margin-bottom: 8px;
    flex-grow: 1;
`;
