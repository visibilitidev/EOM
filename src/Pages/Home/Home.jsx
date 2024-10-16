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
import JoinTheCommunity from '../../Components/JoinTheCommunity/JoinTheCommunity'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection'
import Networking101 from '../../Components/Networking101/Networking101'
import MarqueeCards from '../../Components/MarqueeCards/MarqueeCards'
import MarqueeImages from '../../Components/MarqueeImages/MarqueeImages'
import TestimonialCarousel from '../../Components/Testimonials/Testimonials'
import { assets } from '../../assets/assets'


const Home = () => {
    const imgsrc = assets.group81;
    return (
        <>
            <HeroSection />
             <AboutContainer />
            <MarqueeCards/>
            <NoSoloJourneys/>
            <TestimonialCarousel/>
            <AIConnect
  heading={
    <>
      Connecting Made Simple —<br /> With AI Power
    </>
  }
  imgsrc={imgsrc}
/>

           <EOMGrid/>
             <MarqueeImages/>
            <NetworkCommunity/>
            <Networking101/>
            <TestimonialsSection/>
            <JoinTheCommunity/>
            <FAQ/>
        </>
    )
}

export default Home