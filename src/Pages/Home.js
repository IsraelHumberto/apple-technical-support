import React from 'react'
import Nav from '../Components/Nav/Nav'
import HeroHome from '../Components/HeroHome/HeroHome'
import Services from '../Components/Services/Services'
import Catalog from '../Components/Catalog/Catalog'
import FormSection from '../Components/FormSection/FormSection'

const Home = () => {
    return (
        <>
            <Nav />
            <HeroHome />
            {/* <Services /> */}
            <Catalog />
            <FormSection />
        </>
    )
}

export default Home
