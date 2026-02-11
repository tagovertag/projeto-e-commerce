import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`


export const ModalBox = styled.div`
    background-color: #E66768;
    color: #fff;
    max-width: 1024px;
    padding: 32px;
    position: relative;
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`


export const Foto = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    display: block;

`



export const DescricaoContainer = styled.div`
    h3 {
        font-size: 24px;
        margin-bottom: 16px;
    }


    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`



export const BotaoAdicionar = styled.button`
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    padding: 4px 12px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
`