import React, { useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import SideBar from '../SideBar/SideBar'
import { FaBars } from "react-icons/fa";

import {
    NavContainer,
    NavContent,
    NavLogo,
    NavMenu,
    NavLink,
    NavItem,
    NavBtn,
    NavIcon
} from './NavElements'

const Nav = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    const toogle = () => setOpenSidebar(!openSidebar)

    return (
        <NavContainer>
            <Wrapper>
                <NavContent>
                    <NavLogo to='/'>
                        Logo
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='hero'>Início</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'>Serviços</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='seminovos'>Venda Seminovos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'>Quem somos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavBtn>solicite seu orçamento</NavBtn>
                        </NavItem>
                    </NavMenu>
                    <NavIcon onClick={toogle}>
                        <FaBars />
                    </NavIcon>
                </NavContent>
                <SideBar 
                toogle={toogle}
                openSidebar={openSidebar}
                />
            </Wrapper>
        </NavContainer>
    )
}

export default Nav
