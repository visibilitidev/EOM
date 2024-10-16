import React from 'react';
import { assets } from '../../assets/assets';
import './NetworkCommunity.css';

const NetworkCommunity = ({ backgroundImageUrl }) => {
  return (
    <div 
      className="relative min-h-96 flex items-center justify-center overflow-hidden bg-center bg-contsin bg-no-repeat md:mt-12" 
      style={{
        backgroundImage: `url(${backgroundImageUrl || assets.palace})`,
        backgroundSize: 'cover',
        backgroundPositionY: '-10rem',
      }}
    >
      <div className="w-full max-w-6xl px-4 py-8 lg:px-0 mt-20 sm:mt-20">
        <div className="bg-[#10104b] rounded-[40px] overflow-visible w-full lg:w-3/4 mx-auto flex flex-col md:flex-row items-center p-6 lg:p-8 relative">
          
          {/* Background Images */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center  pointer-events-none z-10">
            <img src={assets.pattern} alt="Pattern 1" className="pattern-image w-56 h-72" />
            <img src={assets.pattern} alt="Pattern 2" className="pattern-image w-56 h-72" />
            <img src={assets.pattern} alt="Pattern 3" className="pattern-image w-56 h-72" />
            <img src={assets.pattern} alt="Pattern 4" className="pattern-image w-56 h-72" />
            <img src={assets.pattern} alt="Pattern 5" className="pattern-image w-56 h-72" />
            <img src={assets.pattern} alt="Pattern 6" className="pattern-image w-56 h-72" />
          </div>
          
          {/* Laptop Image */}
          <div className="w-full z-50 md:w-1/2 relative flex justify-center lg:justify-start mb-10 md:mb-0">
            <img 
              src={assets.laptop}
              alt="Woman with laptop" 
              className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 absolute -top-28 sm:-top-36 md:-top-48 lg:-top-52 object-cover"
              style={{ zIndex: 1 }} // Ensure the image stays above other content
            />
          </div>

          {/* Text Content */}
          <div className="text-content w-full md:w-1/2 text-white pt-20 md:pt-0 lg:-ml-36" style={{margin:'0 auto'}}>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-6 text-center md:text-left px-4 md:px-0">
              We have a Network of 15+ VCs, 30+ Partners, and 300+ startups 
              spread across sectors such as SaaS, Fintech, Healthcare, D2C, 
              Climate tech, etc.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#FFD700] text-[#000033] font-extrabold  px-6 py-4 rounded-lg text-sm md:text-base lg:text-base hover:bg-yellow-400 transition duration-300">
                EXPLORE MORE ABOUT THE COMMUNITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCommunity;
