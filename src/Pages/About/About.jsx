import React from 'react';
import FoundersBrandComponent from '../../Components/FoundersBrandComponent/FoundersBrandComponent';
import Networking101 from '../../Components/Networking101/Networking101';
import AIConnect from '../../Components/AI/Ai';
import EOMStoryComponent from '../../Components/EOMStoryComponent/EOMStoryComponent';
import PoweredByBestComponent from '../../Components/Investors/Investors';
import VentureEventsComponent from '../../Components/VentureEventsComponent/VentureEventsComponent';
import VenturePartnersComponent from '../../Components/VentureEventsComponent/VentureEventsComponent';
import MembershipPlans from '../../Components/MembershipPlans/MembershipPlans';
import EomRightForYou from '../../Components/EomRightForYou/EomRightForYou';
import { assets } from '../../assets/assets';
import FAQ from '../../Components/Faq/Faq';

const About = () => {
  const imgsrc = assets.rob;

  const faqData = [
    {
      question: "Do I have to be an entrepreneur to join?",
      answer: "Yes, EOM is a super exclusive club for growth-stage founders who are in their 10-100 journey. If you're an aspiring entrepreneur or startup enthusiast, you can always join our Underdogs of Madras community for free <a  href='https://nas.io/theunderdogs'>https://nas.io/theunderdogs</a>."
    },
    {
      question: "What are the cities that you’re present in?",
      answer: "EOM Club is a digital community. Our in-person events majorly take place in Chennai. Founders in our club are spread across all districts of Tamil Nadu, Bangalore, Hyderabad & Mumbai. Our mentors & VCs are invested across India."
    },
    {
      question: "Can I cancel my membership?",
      answer: "If you’re disappointed or have feedback, reach out to us at entrepreneursofmadras@gmail.com."
    },
    {
      question: "Is my membership transferable?",
      answer: "No, the EOM club’s annual membership is for individual use only. One phone number per membership and only that person can attend in-person events. Misuse may result in termination with no refunds."
    },
    {
      question: "How long is my membership valid?",
      answer: "Your membership lasts for one year from the date of purchase."
    },
    {
      question: "Can I get a refund if I change my mind?",
      answer: "Sorry! We have a no-refund policy since you get full access to everything as soon as you join."
    },
    {
      question: "Still have questions?",
      answer: "Drop us a message at entrepreneursofmadras@gmail.com or on WhatsApp at +91 97107 27517, and we’ll get back to you!"
    }
  ];


  return (
    <>
      <FoundersBrandComponent />
      <EOMStoryComponent />
      <PoweredByBestComponent />
      <VenturePartnersComponent />
      <MembershipPlans />
      <div className='  md:mt-52'>
        <AIConnect
          heading={
            <>
              India's first AI-Driven Club <br />   <div className="bg-yellow-400 inline-block p-2 mt-2">For Entrepreneurs</div>
            </>
          }
          imgsrc={imgsrc}
        />
      </div>
      <EomRightForYou />
      <div className='-mt-32'>
        <Networking101 backgroundImage={assets.palace} />
      </div>
      <FAQ faqData={faqData} />
    </>
  );
}

export default About;
