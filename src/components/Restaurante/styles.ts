import styled from "styled-components";
import { Cores } from "../../styles"

// essa div envolve as imagens e as tags
export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    
`


export const Card = styled.div`
    background-color: ${Cores.color_text};
    width: 100%;
    max-width: 472px;
    position: relative;
    border: 1px solid ${Cores.color_salmon};
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const InfoContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ImgCard = styled.img`
    width: 100%;
    height: 217px;
    display: block;
    object-fit: cover;
`

export const TagsContainer = styled.div`
    position: absolute;
    top: 16px;
    right:16px;
    display: flex;
    gap: 8px;
`

export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    color: ${Cores.color_salmon};
`

export const MainTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
`

export const Avaliacao = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 700;

    img {
    width: 21px;
    height: 21px;
    }
`

export const Descrition = styled.p`
font-size: 14px;
line-height: 22px;
color: ${Cores.color_salmon};
margin-bottom: 16px;
flex: 1;
`

export const BotaoContainer = styled.div<{ disabled?: boolean }>`
    display: flex;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    margin-top: auto;
    `