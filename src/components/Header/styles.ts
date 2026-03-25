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
    }
`

export const LinkHeader = styled.a`
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: ${Cores.color_salmon};
    
    &:hover{
        text-decoration: none;
    }
`
