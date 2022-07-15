import { React } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import imgiphone8 from '../../Images/phones/kisspng-apple-iphone-8-plus-space-grey-telephone-iphone-8-plus-5b558046a7a566.7756714415323300546867.png'
import imgiphone13 from '../../Images/phones/iphone-13-pro-family-hero.png'
import imgiphone12 from '../../Images/phones/iphone-12-family-select-2021.jpg'
import CarouselComponent from './Carousel/Carousel'
import ContactForm from '../FormSection/Form/ContactForm'

import {
    CatalogContainer,
    CatalogTitle,
} from './CatalogElements'

const Catalog = () => {

    const products = [
        {
            'image': imgiphone8,
            'name': 'iPhone 8 Plus 64GB Dourado Excelente',
            'price': 2199
        },
        {
            'image': imgiphone12,
            'name': 'iPhone 12 Apple 128GB Azul Tela de 6,1”, Câmera Dupla de 12MP, iOS',
            'price': 4399
        },
        {
            'image': imgiphone13,
            'name': 'iPhone 13 Pro Apple (256GB) Azul-Sierra, Tela de 6,1", 5G e Câmera Tripla de 12MP',
            'price': 5499
        },
        {
            'image': imgiphone8,
            'name': 'iPhone 8 Plus 64GB Dourado Excelente',
            'price': 2199
        },
        {
            'image': imgiphone12,
            'name': 'iPhone 12 Apple 128GB Azul Tela de 6,1”, Câmera Dupla de 12MP, iOS',
            'price': 4399
        },
        {
            'image': imgiphone13,
            'name': 'iPhone 13 Pro Apple (256GB) Azul-Sierra, Tela de 6,1", 5G e Câmera Tripla de 12MP',
            'price': 5499
        },
        
    ]




    return (
        <CatalogContainer id="seminovos">
            <Wrapper>
                <CatalogTitle>
                    Catálogo de produtos disponíveis
                </CatalogTitle>
                <CarouselComponent 
                products={products}
                />
            </Wrapper>
        </CatalogContainer>
    )
}

export default Catalog
