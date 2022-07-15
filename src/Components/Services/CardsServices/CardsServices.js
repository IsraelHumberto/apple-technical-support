import React from 'react'
import Img1 from '../../../Images/anton-maksimov-5642-su-R2ljPFJju1s-unsplash.jpg'
import ImgBattery from '../../../Images/low_battery.png'

import {
    CardContainer,
    Card,
} from './CardsServicesElements'

const Cards = () => {

    const cardsContent = [
        {
            'img': Img1,
            'title': 'Troca de tela'
        },
        {
            'img': Img1,
            'title': 'Troca de bateria'
        },
        {
            'img': Img1,
            'title': 'Limpeza'
        },
        {
            'img': Img1,
            'title': 'Conserto de touch ID'
        },
        {
            'img': Img1,
            'title': 'Venda de seminovos'
        },
        {
            'img': Img1,
            'title': 'Venda de acessórios'
        },
    ]

    return (
        <CardContainer>
            {cardsContent.map((item, index) => (
                <Card key={index}>
                    <img src={item.img} alt=''/>
                    <h5>{item.title}</h5>
                </Card>
            ))}
        </CardContainer>
    )
}

export default Cards
