import styled from 'styled-components'
import { Cores } from '../../styles' 

export const FormContainer = styled.div`
h3 {
    color: ${Cores.color_footer};
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
}
`

interface InputGroupProps {
    hasError?: boolean
}

export const InputGroup = styled.div<InputGroupProps>`
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
    border: 2px solid ${(props) => (props.hasError ? Cores.color_erros : Cores.color_footer)};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: 700;
    color: ${Cores.color_dark_gray};

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        border-color: ${(props) => (props.hasError ? Cores.color_erros : Cores.color_salmon)};
    }
}

.error {
    display: block;
    color: ${Cores.color_erros};
    font-size: 12px;
    margin-top: 4px;
    font-weight: 600;
}
`

export const ErrorMessage = styled.div`
    background-color: ${Cores.color_text};
    color: ${Cores.color_erros};
    border: 1px solid ${Cores.color_erros};
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 14px;
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
    transition: opacity 0.3s ease;

    &:hover:not(:disabled) {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
`

export const Row = styled.div`
    display: flex;
    column-gap: 34px;
`