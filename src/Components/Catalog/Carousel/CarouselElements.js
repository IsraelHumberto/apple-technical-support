import styled from "styled-components"
import { colors } from "../../../Root/root"

export const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

`

export const CarouselContainer = styled.div`
    display: flex;
    padding: 0 15px;

`

export const ItemCarousel = styled.div`
    background-color: white;
    margin: 10px;
    padding: 20px 10px;  
    width: calc(33% - 20px);
    border-radius: 8px;
    flex: none;
    transition: 0.5s all ease-in-out;
    
    @media screen and (max-width: 880px) {
        width: calc(50% - 20px);
        transition: 0.5s all ease-in-out;
    }
    
    @media screen and (max-width: 600px) {
        width: calc(100% - 20px);
        transition: 0.5s all ease-in-out;
    }

    .image {
        display: flex;
        justify-content: center;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media screen and (max-width: 600px) {
            height: 150px;
            transition: 0.5s all ease-in-out
        }
    }
    

    .product-info {
        height: 180px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        @media screen and (max-width: 600px){
                height: 150px;
                transition: 0.5s all ease-in-out
            }

        span {
            display: block;
            text-align: center;
            color: ${colors.blue};
            padding: 5px;
        }

        .name {
            flex: 2;
            font-weight: 400;
            text-align: center;
            font-size: 14px;
            overflow: hidden;
        }

        .price {
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 28px;
            flex: 1;

            @media screen and (max-width: 600px) {
                font-size: 20px;
                transition: 0.5s all ease-in-out
            }
        }

        .btn-whatsapp {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            background-color: #34af23;
            color: #fff;
            text-align: center;
            padding: 5px 10px;
            border-radius: 25px;
            margin: 0 10px;
            transition: 0.2s all ease-in-out;

            span {
                color: #fff;
            }

            @media screen and (max-width: 600px){
                span {
                    font-size: 12px;
                    transition: 0.2s all ease-in-out;
                }
            }
        }

    }

`

export const ButtonsCarousel = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.5s all ease-in-out;

    button {
        border-radius: 25px;
        background-color: transparent;
        border: 0;
        font-size: 38px;
        color: ${colors.black};
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s all ease-in-out;

        &:hover {
            opacity: 1;
        }

        @media screen and (max-width: 490px) {
            font-size: 20px;
            transition: 0.5s all ease-in-out;
        }
    }

    /* @media screen and (max-width: 600px) {
        display: none;
        transition: 0.5s all ease-in-out;
    } */
`