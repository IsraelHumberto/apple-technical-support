import {React, useRef} from 'react'
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
    Carousel,
    ItemCarousel,
    ButtonsCarousel,
    CarouselContainer,
} from './CarouselElements'

const CarouselComponent = ({products}) => {

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    
    
    const carousel = useRef(useRef)

    return (
        <CarouselContainer>
        <ButtonsCarousel>
            <button onClick={handleLeftClick}>
                <FaChevronLeft />
            </button>
        </ButtonsCarousel>
        <Carousel ref={carousel}>
            {products.map((product) => {
                const { image, price, name } = product

                return (
                    <ItemCarousel>
                        <div className='image'>
                            <img src={image} alt='' />
                        </div>
                        <div className='product-info'>
                            <span className='name'>{name}</span>
                            <span className='price'>R${price.toLocaleString('BR')},00</span>
                            <a href='google.com' className='btn-whatsapp'>
                                <FaWhatsapp /> 
                                <span>whatsapp</span>
                            </a>
                        </div>
                    </ItemCarousel>
                )
            })}
        </Carousel>
        <ButtonsCarousel>
            <button onClick={handleRightClick}>
                <FaChevronRight />
            </button>
        </ButtonsCarousel>
    </CarouselContainer>
    )
}

export default CarouselComponent
