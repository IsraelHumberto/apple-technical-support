import styled from "styled-components";
import {colors} from '../../Root/root'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SideBarContainer = styled.nav`
    background-color: rgba(28,28,28, 0);
    opacity: 1;
    height: 100vh;
    width: ${({ openSidebar }) => (openSidebar ? '100%' : '0')};
    z-index: 999;
    position: absolute;
    top: 0;
    right: ${({ openSidebar }) => (openSidebar ? '0' : '-1000px')};
    transition: 0.2s all ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const SideBarContent = styled.div`
    background-color: rgba(8,7,8, 1);
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
`

export const NavIcon = styled.div`
    position: relative;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
    right: 18px;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const NavItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
`
export const NavLink = styled(LinkS)`
    color: #E5E5E5;
    text-transform: uppercase;
    padding: 15px 16px;
    text-align: end;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    border-bottom: 1px solid ${colors.black};
    width: 100%;

    &:hover {
        background-color:rgba(256,256,256,0.1);
        padding: 18px 16px;
        transition: 0.2s ease-in-out;
    }
`

export const NavBtn = styled.a`
    font-family: 'Poppins';
    background-color: ${colors.yellow};
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px 16px;
    text-align: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.2s ease-in-out;

    &:hover {
        padding: 18px 16px;
        transition: 0.2s ease-in-out;
    }
`