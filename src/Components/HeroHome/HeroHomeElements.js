import styled from "styled-components";
import {colors} from '../../Root/root'

export const HeroContainer = styled.section`
    position: relative;
    background-color: ${colors.blue};
`

export const HeroContent = styled.div`
    color: #fff;
    padding: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    gap: 18px;


    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 48px;
    }
`

export const HeroTitle = styled.div`
    max-width: 60%;

    h1 {
        color: ${colors.gray};
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 10px;
    }

    h4 {
        color: ${colors.gray};
        font-weight: 300;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
    }
    span {
        color: ${colors.yellow};
    }
    
    @media screen and (max-width: 768px){
        text-align: center;
        max-width: 90%;
    }

`

export const HeroImg = styled.div`
    
    @media screen and (max-width: 768px){

    }
`