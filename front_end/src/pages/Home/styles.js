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
    margin: 10px 0 0 50px;
    width: 200px;
`

export const H3 = styled.h3`
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    color: white;
    margin: 0 0 5px 15px;
`

export const Input = styled.input`
    width: 340px;
    height: 30px;
    padding-left: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
    &:focus {
        opacity: 0.8;
    }
    &:hover {
        border: 150px;
    }
`
