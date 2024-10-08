import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import AboutContainer from '../../Components/AboutContainer/AboutContainer'
import Features from '../../Components/Features/Features'
import Reviewcontainer from '../../Components/Reviewcontainer/Reviewcontainer'
import AccordionCon from '../../Components/AccordionCon/AccordionCon'
// import WhyEOM from '../../Components/WhyEOMCon/WhyEOM'
import FAQ from '../../Components/Faq/Faq'
import EOMGrid from '../../Components/EOM_cards/WhyEom'
import AIConnect from '../../Components/AI/Ai'
import NoSoloJourneys from '../../Components/NoSoloJourneys/NoSoloJourneys'
import NetworkCommunity from '../../Components/NetworkCommunity/NetworkCommunity'

const Home = () => {
    return (
        <>
            <HeroSection />
             <AboutContainer />
            {/* <ImageCarousel />
            <Features /> */}
            {/* <Reviewcontainer/> */}
            {/* <AccordionCon/> */}
            {/* <WhyEOM/> */}
            <NoSoloJourneys/>
            <AIConnect/>
            <NetworkCommunity/>
            <EOMGrid/>
            <FAQ/>
        </>
    )
}

export default Home