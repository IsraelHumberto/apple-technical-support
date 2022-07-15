import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button'
import imgHero from '../../Images/anton-maksimov-5642-su-R2ljPFJju1s-unsplash.jpg'

import {
    HeroContainer,
    HeroContent,
    HeroTitle,
    HeroImg,
    BackgroundHero
} from './HeroHomeElements'
import { colors } from '../../Root/root'

const HeroHome = () => {
    return (
        <HeroContainer id='hero'> 
            <Wrapper>
                <HeroContent>
                    <HeroTitle>
                        <h1>
                            Assistência técnica <span>especializada</span> em Iphone
                        </h1>
                        <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi doloremque magnam eligendi quibusdam quisquam impedit soluta vero eveniet repellat
                        </h4>
                        <Button 
                        children={'Orçamento grátis'}
                        background={colors.yellow}
                        color={colors.blue}
                        margin={'30px 0 0 0'}
                        hoverBg={colors.yellow}
                        hoverColor={colors.blue}
                        />
                    </HeroTitle>
                </HeroContent>
            </Wrapper>
        </HeroContainer>
    )
}

export default HeroHome
