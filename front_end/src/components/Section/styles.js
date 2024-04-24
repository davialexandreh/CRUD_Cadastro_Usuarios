import styled from 'styled-components'

export const Section = styled.section`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 60px 60px 0 0;
    padding: 50px 35px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 211.88px);

    ${(props) => 
        props.isBlur && 
        `
        display: flex;
        flex-direction: column;
        align-items: center;  
    `}
`