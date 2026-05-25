import styled from "styled-components";


export const SectionContainer = styled.section`
    padding: 56px 0;
    overflow-x: hidden;
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
    margin-top: 56px;
    margin-bottom: 120px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        width: 90%;
        grid-template-columns: 1fr 1fr;
        margin: 56px auto 120px;
    }

    @media (max-width: 768px) {
        width: 80%;
        grid-template-columns: 1fr;
        margin: 56px auto 120px;
    }
`