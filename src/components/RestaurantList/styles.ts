import styled from "styled-components";

export const Section = styled.section`
    padding: 80px 0;
    
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 80px; 
    row-gap: 48px; 
    margin-bottom: 150px;
    @media (max-width: 1024px){
        grid-template-columns: 1fr;
        justify-items: center;
        column-gap: 0;
        row-gap: 32px;
    }
`