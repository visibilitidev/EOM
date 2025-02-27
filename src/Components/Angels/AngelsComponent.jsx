import React from 'react'
import HeroSection from './HeroSection'
import CTAWithImage from './CTAWithImage'
import { assets } from '../../assets/assets'
import FeaturesComponent from './FeaturesComponent'
import AboutComponent from './AboutComponent'
import Networking101 from '../../Components/Networking101/Networking101'
import GetInTouch from './GetInTouch'

const AngelsComponent = () => {
    return (
        <section className="bg-[#F8F8F8]">
            <HeroSection />
            <CTAWithImage
                title='Are you a startup founder seeking strategic capital?'
                ctaText='Join the Community'
                imgSrc={assets.gamechanginplan}
                className='md:flex-row-reverse gap-8'
                link="https://nas.io/entrepreneurs-of-madras-application"
            />
            <CTAWithImage
                title='Are you an investor looking to back promising startups?'
                ctaText='Register as an EOM Angel'
                imgSrc={assets.angles2}
                className='md:flex-row gap-8'
                link='https://docs.google.com/forms/d/1jq6zhFMrTsmYG3CmLzO-sNSDsCnDwbaz-PiikCLAPDk/edit'
            />
            <FeaturesComponent />
            <AboutComponent />
            <GetInTouch />
            <Networking101 />
        </section>
    )
}

export default AngelsComponent