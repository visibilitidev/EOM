import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import AboutContainer from '../../Components/AboutContainer/AboutContainer'
import Features from '../../Components/Features/Features'

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutContainer />
            <ImageCarousel />
            <Features />
        </>
    )
}

export default Home