import React from 'react';

const NetworkCommunity = ({ backgroundImageUrl }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        className="relative rounded-[40px] overflow-hidden"
        style={{
          backgroundImage: `url(${'public/palace.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-[#000033] w-3/4 mx-auto rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-8">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src="laptop.png" 
              alt="Woman with laptop" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 text-white">
            <p className="text-lg md:text-xl mb-6">
              We have a Network of 15+ VCs, 30+Partners and, 300+ startups 
              spread across sectors such as SaaS, Fintech, Healthcare, D2C, 
              Climate tech, etc
            </p>
            <button className="bg-[#FFD700] text-[#000033] font-bold py-3 px-6 rounded-full text-sm md:text-base hover:bg-yellow-400 transition duration-300">
              EXPLORE MORE ABOUT THE COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCommunity;