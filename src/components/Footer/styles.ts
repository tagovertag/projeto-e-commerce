import styled from "styled-components"
import { Cores } from "../../styles"
export const Footer_Container = styled.footer`
    width: 100%;
    padding: 40px 0;
    align-items: center; /* centraliza horizontalmente */
    justify-content: center; /* empilha  os itens um embaixo do outro */
    display: flex;
    flex-direction: column;    
    background-color: ${Cores.color_footer}

`

export const Rede_Social = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;

    img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    }
`
export const Paragrafo_Footer = styled.p`
    max-width: 480px;
    text-align:center;
    font-weight: 400;
    line-height: 12px;
    font-size: 10px;    
    color: ${Cores.color_salmon};
`