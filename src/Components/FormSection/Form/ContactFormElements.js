import styled from "styled-components";
import { colors } from "../../../Root/root";

export const FormContainer = styled.form`
    max-width: 500px;
    padding: 40px;

    input, select, textarea {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid ${colors.lightBeige};
        padding: 6px 10px;
        color: ${colors.lightBeige};
        width: 100%;
        margin: 14px 0;
        outline: none;
        font-weight: 300;

        &::placeholder {
            color: ${colors.lightBeige};
        }
    }

    option {
        color: ${colors.blue};
    }
    
    .formGroup {
        display: flex;
        gap: 24px;

        .selectUf {
            width: 20%;
            min-width: 80px;
        }
    }

    textarea {
        height: 100px;
    }

    input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
        color: transparent;
    }

    .submitBtn {
        position: relative;
        font-family: 'Poppins';
        background-color: ${colors.blue};
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        border-radius: 35px;
        transition: 0.1s all ease-in-out;

        &:hover {
            background-color: rgba(4, 21, 31, 0.9);
            transition: 0.1s all ease-in-out;
            border: 1px rgba(4, 21, 31, 0.9) solid;
        }
    }


`