import styled from "styled-components";

export const Section = styled.section`
    padding: 80px 0;
    
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr; /*duas colunas inteiras*/
    column-gap: 80px; /* Espaço laterais entres os cards*/
    row-gap: 48px; /* Espaço vertical entre as linhas*/
    margin-bottom: 150px;
    @media (max-width: 1024px){
        grid-template-columns: 1fr;
        justify-items: center;
        column-gap: 0;
        row-gap: 32px;
    }
`