import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="relative w-full mx-auto p-4 font-sans mb-8">
      {/* Background Image */}
      <img
        src={assets.palace}
        alt="Palace Background"
        className="reflection absolute inset-0 w-full h-full object-cover z-0" // Ensure it covers the whole section
      />
      
      <div className="relative z-10 text-center mb-8">
        <p className="text-base uppercase tracking-wide mb-4 font-OpenSans">Start strong, scale stronger with</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-Montserrat">THE FINEST<br />FOUNDERS-ONLY CLUB</h1>
        <p className="text-lg mx-auto mb-4 font-OpenSans md:max-w-[45%]">EOM is an exclusive community for growth-focused entrepreneurs who are ready for the next big leap.</p>
        <button className="bg-yellow-400 text-black font-extrabold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 text-lg">
          Become a Member
        </button>
      </div>

      <div className="relative">
        <div className="absolute -left-0 top-1/2 transform -translate-y-1/2">
          <img src={assets.sun} className="w-28 h-28 rounded-full" alt="Sun Icon" />
        </div>
        <div className="border-4 max-w-4xl mx-auto border-black rounded-lg overflow-hidden relative">
          <img src={assets.videoimg} alt="Founders meeting" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <FaPlayCircle
              size={64}
              className="text-white opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => console.log('Play video')} // Handle video play action
            />
          </div>
        </div>
      </div>

      {/* Optional SVG for decorative effect */}
      {/* <div className="mt-8">
        <svg className="w-full h-24" viewBox="0 0 400 100">
          <path d="M0,50 Q100,0 200,50 T400,50" fill="none" stroke="#000" strokeWidth="2" />
        </svg>
      </div> */}
    </div>
  );
};

export default HeroSection;
