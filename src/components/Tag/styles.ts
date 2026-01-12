import styled from "styled-components";
import { Cores } from "../../styles";
import { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${Cores.color_salmon};
    color: ${Cores.color_footer};

    /*Defini o tamanho da fonte com base na prop size*/
    font-size: ${props => props.size === 'big' ? '14px' : '12px'};

    /*Defini o padding para que a tag big pareça maior*/
    padding: ${props => props.size === 'big' ? '8px 6px' : '6px 4px'};
    font-weight: 700;
    display: inline-block;
    text-align: center;
`