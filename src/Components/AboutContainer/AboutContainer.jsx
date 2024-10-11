import React from 'react';
import { assets } from '../../assets/assets';

const AboutContainer = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans mt-12 ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight font-Montserrat">
            This Isn't A Community For Everyone — It's About Founders Helping Founders
          </h1>
          <p className="mb-4 text-gray-700">
            EOM is a space for founders who are ready to engage in honest conversations, share experiences, and grow alongside peers who truly understand the journey.
          </p>
          <p className="mb-6 text-gray-700">
            Entrepreneurs of Madras offers a trusted, high-level environment where you can talk openly, connect deeply, and exchange growth potential - from finance to hiring, marketing to operations, pitching to fundraising - all in one place.
          </p>
          <button className="bg-yellow-400 text-black font-extrabold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 text-lg">
            STORY OF EOM
          </button>
        </div>
        <div className=" w-full mx-auto md:w-1/2 relative">
          <div className="bg-gray-200 h-full rounded-[40px] overflow-hidden">
            <img 
              src={assets.videoimg}
              alt="Placeholder" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-24 -right-16 md:-bottom-16 md:-right-20 w-48 h-52 md:w-[236.32px] md:h-[209.47px] gap-0 rotate-[-15.78deg]">
              <img src={assets.trophy} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;