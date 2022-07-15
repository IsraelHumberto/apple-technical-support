import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Cards from './CardsServices/CardsServices'
import {
    ServicesContainer,
    ServicesContent,
    ServicesTitle,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <Wrapper>
                <ServicesContent>
                    <ServicesTitle>
                        Nossos serviços
                    </ServicesTitle>
                    <Cards />
                </ServicesContent>
            </Wrapper>
        </ServicesContainer>
    )
}

export default Services
