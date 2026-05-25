import styled from "styled-components";
import { Container } from "../../styles"
import { Cores } from "../../styles"


export const Imagem_banner = styled.div`
    width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));


  ${Container} {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px 0;
    
  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
        width: 90%;
        margin-left: 40px;
    }
  }
`

export const Titulo_banner = styled.h2`
    font-size: 32px;
    font-weight: 100;
    color: ${Cores.color_text};

  
`

export const Texto_banner = styled.p`
    font-size: 32px;
    font-weight: 900;
    padding-top: 96px;
      

    
`


