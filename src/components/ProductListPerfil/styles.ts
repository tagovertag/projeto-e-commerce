import styled from "styled-components";


export const SectionContainer = styled.section`
    padding: 56px 0;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
    margin-top: 56px;
    margin-bottom: 120px;

    @media (max-width: 1024px) {
    width: 50%;
    grid-template-columns: 1fr;
    margin: auto;
    }
`