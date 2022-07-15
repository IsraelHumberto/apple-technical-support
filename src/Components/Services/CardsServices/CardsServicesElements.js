import styled from "styled-components";

import { colors } from "../../../Root/root";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    padding: 24px;
`

export const Card = styled.div`
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.4s all ease-out;

    img {
        border-radius: 10px 10px 0 0;
    }

    h5 {
        font-weight: 300;
        transition: 0.4s all ease-out;
        font-size: 1.5rem;
        text-align: center;
        padding: 10px 0;
    }

    &:hover {
        background-color: ${colors.yellow};
        transition: 0.4s all ease-out;
        transform: scale(1.02);
        padding: 0;

        h5 {
            transition: 0.4s all ease-out;
        }
    }

`