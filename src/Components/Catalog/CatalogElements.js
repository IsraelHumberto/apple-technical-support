import styled from "styled-components";
import { colors } from "../../Root/root";

export const CatalogContainer = styled.section`
    background-color: ${colors.gray};
    padding: 36px 24px;
`

export const CatalogTitle = styled.h1`
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
        background-color: ${colors.yellow};
        height: 100%;
        left: -15px;
    }

    @media screen and (max-width: 600px){
        font-size: 26px;
        transition: 0.5s all ease-in-out;
    }
`
