import styled from "styled-components";
import {colors} from '../../Root/root'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    background-color: ${colors.blue};
    padding: 10px 0;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`

export const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 24px;
`

export const NavLogo = styled(LinkR)`
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    padding: 18px 0;
    text-decoration: none;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    height: 60px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
`
export const NavLink = styled(LinkS)`
    position: relative;
    color: #E5E5E5;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 6px;
    cursor: pointer;
    transition: 0.5s all ease-out;
    margin: 0 10px;

    &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 1px;
        background-color: ${colors.yellow};
        left: 0;
        bottom: 0;
        transition: 0.5s all ease-out;
    }
    
    &:hover::after {
        width: 100%;
        transition: 0.5s all ease-out;
    }
`

export const NavBtn = styled.a`
    position: relative;
    font-family: 'Poppins';
    background-color: ${colors.yellow};
    color: ${colors.blue};
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 25px;
`

export const NavIcon = styled.div`
    color: #fff;
    font-size: 24px;
    display: none;
    cursor: pointer;
    opacity: ${({ openSidebar }) => (openSidebar ? 'flex' : 'none')};;;

    @media screen and (max-width: 768px){
        display: block;
    }
`
