import styled from "styled-components";
import { Cores, Container } from "../../styles";

export const HeaderBar = styled.div`
    width: 100%;
    height: 186px;
    display: flex;
    align-items: center;
    background-color: #fde5d8;
    
    ${Container}{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media (max-width: 1024px) {
            width: 80%;
        }
        @media (max-width: 768px) {
            width: 90%;
            justify-content: center;

        }
    }
`

export const LinkHeader = styled.a`
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: ${Cores.color_salmon};
    @media(max-width: 768px) {
        font-size: 12px;
        padding: 0 12px;

    }
    
    &:hover{
        text-decoration: none;
    }
`
export const HeaderLogo = styled.img`

    @media (max-width: 768px) {
        width: 70px;
    }
`