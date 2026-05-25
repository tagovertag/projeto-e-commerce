import styled from 'styled-components';
import { Cores } from '../../styles';

export const FormContainer = styled.div`
    margin-top: 16px;
    width: 100%;
    text-align: center;
    
    h3 {
        color: ${Cores.color_dark_gray};
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 24px;
        color: ${Cores.color_text};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
    ` 

export const SuccessIcon = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${Cores.color_green};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    margin: 0 auto 16px;
    animation: slideDown 0.4s ease-in-out;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const OrderIdContainer = styled.div`
    background-color: ${Cores.color_red};
    border: 2px solid ${Cores.color_footer};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
`

export const OrderIdLabel = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: ${Cores.color_footer};
    text-transform: uppercase;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
`

export const OrderIdValue = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: ${Cores.color_text};
    font-family: 'Courier New', monospace;
    letter-spacing: 2px;
`

export const Message = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${Cores.color_footer};
    margin-bottom: 16px;
    text-align: left;
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