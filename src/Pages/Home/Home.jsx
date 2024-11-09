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
import ScrollPopup from '../../Components/ScrollPopup/ScrollPopup'
import { assets } from '../../assets/assets'


const Home = () => {

  const faqData = [
    {
      question: "Is EOM for entrepreneurs only in Madras (Chennai)?",
      answer: "Not at all! We celebrate the relentless spirit of the South (aka “Madrasi”). Our members are from all districts of Tamil Nadu, a few even from neighboring states such as Bangalore, Hyderabad & Mumbai.",
    },
    {
      question: "What are the benefits of joining EOM?",
      answer: "Check out all the perks on our <a style='color:blue;font-weight:bold' href='/about'>Membership Page</a>",
    },
    {
      question: "How can I get more information?",
      answer: "Send us a message on WhatsApp at +91 97107 27517, and we'll figure out the best way to assist you. We welcome all questions and concern.",
    },
    {
      question: "How do I stay updated on EOM events and initiatives?",
      answer: "Join our exclusive EOM Founders-only WhatsApp group. As a member, you get priority invites to investor meetups, private dinners, and early registration for major editions & getaways. Or you can always follow us on our social media handles.",
    },
    {
      question: "Does EOM invest in startups?",
      answer: "No, we don’t. But we do connect you with the right investors!",
    },
    {
      question: "Can EOM help me raise funds?",
      answer: "Absolutely! We partner with VCs and angels. Our Investor Meetups and Private Dinners are perfect opportunities to connect.",
    },
    {
      question: "What is Madrasi Connect?",
      answer: "Madrasi Connect is an AI-powered Whatsapp bot. It helps members find resources, connect, and network through keyword searches & recommendations from the vast EOM database.",
    },
  ];


  const imgsrc = assets.group81;
  return (
    <>
      {/* <ScrollPopup/> */}
      <HeroSection />
      <AboutContainer />
      <MarqueeCards />
      <NoSoloJourneys />
      <TestimonialCarousel />
      <AIConnect
        heading={
          <>
            Connecting Made Simple —<br />
            <div className="bg-yellow-400 inline-block p-2 mt-2 rounded-lg">With AI Power</div>
          </>
        }
        imgsrc={imgsrc}
      />

      <EOMGrid />
      <MarqueeImages />
      <NetworkCommunity />
      <Networking101 />
      <TestimonialsSection />
      <JoinTheCommunity />
      <FAQ faqData={faqData} />
    </>
  )
}

export default Home