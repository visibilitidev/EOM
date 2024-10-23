import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const AboutContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-4 font-sans mt-20 overflow-hidden">
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
          <div className="bg-yellow-400 px-4 hover:bg-yellow-500 inline-block rounded-lg">
            <button className="b text-black font-extrabold py-2 px-4 rounded-md transition duration-300   text-lg  transition-transform transform 
               hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1 active:shadow-lg"
              onClick={() => navigate('/about')}>
              STORY OF EOM
            </button>
          </div>
        </div>
        <div className=" w-full mx-auto md:w-1/2 relative">
          <div className="bg-gray-200 h-full rounded-[40px] overflow-hidden">
            <img
              src={assets.aboutimg}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
            <div className=" hidden sm:block absolute -bottom-24 -right-16 md:-bottom-16 md:-right-20 w-48 h-52 md:w-[236.32px] md:h-[209.47px] gap-0 rotate-[-15.78deg]">
              <img src={assets.trophy} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;