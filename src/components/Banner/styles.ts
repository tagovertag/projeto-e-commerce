import styled from "styled-components"
import { Cores } from "../../styles"

export const BannerImg = styled.div`
    width: 100%;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover; /* faz a imagem cobrir todo o espaço*/
    background-repeat: no-repeat;
    background-position: center; /* centraliza a imagem */
    margin-bottom: 80px;
`

export const LogoBanner = styled.img`
    margin-top: 40px;
    width: 125px; /* Padrão do logo do efood */
    height: auto;
    
`
export const TitleBanner = styled.h2`
    max-width: 540px;
    width: 100%;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    margin-top: 138px;
    line-height: 42px;
    color: ${Cores.color_salmon}
`