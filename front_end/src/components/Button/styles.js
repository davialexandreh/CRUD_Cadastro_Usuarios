import styled from "styled-components";

export const Button = styled.button`
    font-weight: bold;
    font-size: 15px;
    color: #004AAD;
    display: block;
    margin: 0 auto;
    width: 170px;
    height: 50px;
    background-color: #F0F0F0;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transform: scale(1);
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }

    ${(props) =>
        props.voltar &&
        `
        margin-top: 80px;
        img{
            transform: rotateY(180deg);
        }
    `}
`