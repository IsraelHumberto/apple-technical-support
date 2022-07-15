import React, { Children } from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    margin: ${({ margin }) => (margin ? margin : '0')};
`

const Btn = styled.a`
    background-color: ${({ background }) => (background ? background : 'inherit')};
    padding: ${({ big }) => (big ? '20px 24px' : '12px 16px')};
    border: ${({ border }) => (border ? border : '0')};
    color: ${({ color }) => (color ? color : 'inherit')};
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: ${({ hoverBg }) => (hoverBg ? hoverBg : 'inherit')};
        transition: 0.2s all ease-in-out;
        color: ${({ hoverColor }) => (hoverColor ? hoverColor : 'inherit')};
    }
`

const Button = ({children, href, big, background, margin, border, color, hoverBg, hoverColor}) => {
    return (
        <ButtonContainer margin={margin}>
            <Btn 
            href={href} 
            big={big}
            border={border}
            color={color}
            background={background}
            hoverBg={hoverBg}
            hoverColor={hoverColor}>
                {children}
            </Btn>
        </ButtonContainer>
    )
}

export default Button
