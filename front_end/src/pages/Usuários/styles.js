import styled from 'styled-components'
import Fundo from '../../assets/fundo.png'

export const ContainerPrincipal = styled.div`
    height: 100%;
    min-height: 100vh;
    background: url("${Fundo}");
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const Imagem = styled.img`
    margin: 0px;
    width: 300px;
`

export const Usuario = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    width: 340px;
    height: 30px;
    padding-left: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    font-size: 20px;
    color: white;
    .button-del {
        border: none;
        background: none;
        display: flex;
        height: 20px;
        cursor: pointer;
        transform: scale(1);
        transition: 0.5s;
        &:hover {
            transform: scale(1.3);
            transition: 0.5;
        }
    }
`