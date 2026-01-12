import styled from 'styled-components';
import { Cores } from '../../../styles'

export const Button_Card = styled.button`
    width: 100%;
    height: 30px;
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    border: none;
    background-color: ${Cores.color_footer};
    color: ${Cores.color_salmon};
    cursor: pointer;
    display: block;
`;