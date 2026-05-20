import styled from 'styled-components'
import { Cores } from '../../styles' // Certifique-se que o caminho para suas cores está correto

export const FormContainer = styled.div`
h3 {
    color: ${Cores.color_footer};
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
}
`

export const InputGroup = styled.div`
    margin-bottom: 8px;
    flex: auto;

label {
    display: block;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${Cores.color_footer};
}

input {
    background-color: ${Cores.color_footer};
    border: 1px solid ${Cores.color_footer};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: 700;
    color: ${Cores.color_dark_gray};

    &.error {
        border: 2px solid red;
    }
}
`

export const ButtonContainer = styled.div`
    margin-top: 24px;

button {
    width: 100%;
    margin-bottom: 8px;
    background-color: ${Cores.color_footer};
    color: ${Cores.color_salmon};
    border: none;
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
}
`

export const Row = styled.div`
    display: flex;
    column-gap: 34px;
`