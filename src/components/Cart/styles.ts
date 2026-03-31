
import styled from 'styled-components'
import { Cores } from '../../styles'
import lixeira from '../../assets/imagens/Perfil/lixeira.png'
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
`

export const Sidebar = styled.aside`
    background-color: ${Cores.color_salmon};
    z-index: 1001;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    overflow-y: auto;
    
    .empty-text{
        font-size: 14px;
        line-height: 22px;
        color: ${Cores.color_footer};
        text-align: center;
    }
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${Cores.color_footer};
    padding: 8px;
    position: relative;
    margin-bottom: 16px;

    img{
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 8px
    }

    h3 {
        color: ${Cores.color_salmon};
        font-weight: 900;
        font-size: 18px;
        margin-bottom: 16px;
    }

    span{
        color: ${Cores.color_salmon};
        font-size: 14px;

        & + span {
            margin-left: 8px;
        }
    }

    button{
        background-image: url(${lixeira});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
    }
`
export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${Cores.color_footer};
    font-weight:700;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 16px;
`