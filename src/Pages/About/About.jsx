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

const About = () => {
  const imgsrc = "public/rob.png";
  
  return (
    <>
      <FoundersBrandComponent />
      <EOMStoryComponent/>
      <PoweredByBestComponent/>
      <VenturePartnersComponent/>
      <MembershipPlans/>
      <div className='  md:mt-52'>
        <AIConnect 
          heading={
            <>
              India's first AI-Driven Club <br /> For Entrepreneurs
            </>
          }
          imgsrc={imgsrc}
        />
      </div>
      <EomRightForYou/>
      <div className='-mt-32'>
      <Networking101 backgroundImage="public/palace.png"/>
      </div>

     
    
    
    </>
  );
}

export default About;
