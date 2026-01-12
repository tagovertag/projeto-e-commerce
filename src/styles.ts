import styled, { createGlobalStyle } from "styled-components";

export const Cores = {
    color_salmon: '#E66767',
    color_body: '#FFF8F2',
    color_footer: '#FFEBD9',
    color_text: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
        }

    body {
        background-color: ${Cores.color_body};
        color: ${Cores.color_text};
        }
`
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

`