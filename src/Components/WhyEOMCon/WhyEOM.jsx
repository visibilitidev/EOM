import React from "react";
import carddetail from '../JSON/CardImage.json'

const WhyEOM = () => {
  return (
    <>
      <div className="max-w-full flex flex-col justify-center mt-32">
        <h1 className="font-Montserrat font-bold text-3xl text-center my-1">
          Why is EOM one of a kind?
        </h1>
        <h5 className="font-OpenSans text-lg font-normal text-center my-2">
          This isn’t just another networking group. Here’s what sets us apart:
        </h5>
      </div>
      <div class="w-4/6 mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-3 place-content-center place-items-center mt-6">
      <div className="bg-slate-300 relative w-72 h-48 rounded-2xl">
        <p className="absolute top-6 left-5 font-medium">Candid <br /> Conversations</p>
        <img src="Cardimg/img1.png" alt="" className="absolute right-0 bottom-0 w-44 h-40" />
      </div>
      <div className="bg-slate-300 relative w-72 h-48 rounded-2xl">
        <p className="absolute top-6 left-5 font-medium">Founder-to- <br />Founder Support</p>
        <img src="Cardimg/img2.png" alt="" style={{width:"215px",height:"210px"}}  className="absolute right-1 bottom-0 w-44 h-40"/>
      </div>
      <div className="bg-slate-300 relative w-72 h-48 rounded-2xl">
        <p className="absolute top-6 left-5 font-medium">Curated <br /> Knowledge</p>
        <img src="Cardimg/img3.png" alt="" style={{width:"200px",height:"220px",}}  className="absolute right-2 bottom-0"/>
      </div>
      <div className="bg-slate-300 relative w-72 h-48 rounded-2xl">
        <p className="absolute top-6 left-5 font-medium">Closed-Door <br /> Events</p>
        <img src="Cardimg/img4.png" alt="" style={{width:"145px",height:"205px"}} className="absolute right-9 bottom-0 w-44 h-40" />
      </div>
      <div className="bg-slate-300 relative w-72 h-48 rounded-2xl">
        <p className="absolute top-6 left-5 font-medium">Focus on <br /> Scaling</p>
        <img src="Cardimg/img5.png" alt="" style={{width:"200px",height:"215px"}}  className="absolute right-3 bottom-0 w-44 h-40"/>
      </div>
      <div className="bg-slate-300 relative w-72 h-48 rounded-2xl">
        <p className="absolute top-6 left-5 font-medium">Masterclass <br /> Sessions</p>
        <img src="Cardimg/img6.png" alt="" style={{width:"210px",height:"230px"}} className="absolute right-0 bottom-0" />
      </div>

        
      </div>
    </>
  );
};

export default WhyEOM;
