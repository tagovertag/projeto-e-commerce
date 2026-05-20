import styled from 'styled-components';
import { Cores } from '../../styles';

export const FormContainer = styled.div`
    margin-top: 16px;
    width: 100%;
    
    h3 {
        color: ${Cores.color_dark_gray};
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 16px;
        color: ${Cores.color_text};
    }
    ` 

export const Message = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${Cores.color_footer};
    margin-bottom: 16px;
`

export const ButtonContainer = styled.div`
    margin-top: 24px;
    width: 100%;

    button {
    width: 100%;
    margin-bottom: 8px;
    background-color: ${Cores.color_footer};
    color: ${Cores.color_salmon};
    border: none;
    padding: 8px 0;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${Cores.color_text};
        color: ${Cores.color_salmon};
    }
    }
`