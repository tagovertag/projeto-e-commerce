import styled from "styled-components"
import { Cores } from "../../styles"

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${Cores.color_footer};
  }

  input {
    background-color: ${Cores.color_footer};
    border: none;
    height: 32px;
    padding: 8px;
    width: 100%;
    font-weight: 700;
    color: ${Cores.color_dark_gray};
    outline: none;

    
    &.error {
      border: 2px solid ${Cores.color_erros};
    }
  }

  
  span.error-message {
    color: ${Cores.color_dark_gray};
    font-size: 12px;
    font-weight: 700;
    display: block;
    margin-top: 4px;
  }
`

export const Header = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
`


export const Row = styled.div`
  display: flex;
  column-gap: 34px; 
  width: 100%;

`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  
  button {
    width: 100%;
    margin-bottom: 8px;
    padding: 4px 0;
    font-weight: 700;
    background-color: ${Cores.color_footer};
    color: ${Cores.color_salmon};
    border: none;
    cursor: pointer;
  }
`