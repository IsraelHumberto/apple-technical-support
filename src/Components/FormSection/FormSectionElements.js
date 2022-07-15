import styled from "styled-components";

import { colors } from "../../Root/root";

export const Section = styled.section`
    background-color: ${colors.yellow};
    padding: 36px 24px;

    .flex {
        display: flex;

        .contactForm {
            flex: 1 1 50%;
        }

        .imgForm {
            display: flex;
            flex: 1 2 300px;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

    }
`

export const FormTitle = styled.h1`
    position: relative;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.blue};
    font-size: 36px;
    transition: 0.5s all ease-in-out;
    margin: 24px 39px; 

    &::before {
        position: absolute;
        content: '';
        width: 8px;
        background-color: ${colors.lightBeige};
        height: 100%;
        left: -15px;
    }

    @media screen and (max-width: 600px){
        font-size: 26px;
        transition: 0.5s all ease-in-out;
    }
`

export const FormSubtitle = styled.h4`
    color: ${colors.lightBeige};
    font-weight: 300;
    margin: 0 39px; 
    font-size: 20px;
    transition: 0.5s all ease-in-out;

    
    @media screen and (max-width: 600px){
        font-size: 16px;
        transition: 0.5s all ease-in-out;
    }
`