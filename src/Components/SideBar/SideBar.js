import React from 'react'

import { FaTimes } from "react-icons/fa";

import {
    SideBarContainer,
    SideBarContent,
    NavIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn
} from './SideBarElements'

const SideBar = ({openSidebar, toogle}) => {
    return (
        <SideBarContainer openSidebar={openSidebar} onClick={toogle}>
            <SideBarContent>
                <NavIcon 
                onClick={toogle}>
                    <FaTimes />
                </NavIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='hero' onClick={toogle}>Início</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='services' onClick={toogle}>Serviços</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='seminovos' onClick={toogle}>Venda Seminovos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='services' onClick={toogle}>Quem somos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavBtn>solicite seu orçamento</NavBtn>
                    </NavItem>
                </NavMenu>
            </SideBarContent>
        </SideBarContainer>
    )
}

export default SideBar
