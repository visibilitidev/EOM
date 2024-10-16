import React from 'react';
import { assets } from '../../assets/assets';

const FoundersBrandComponent = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-Montserrat md:max-w-[80%] mx-auto leading-snug">
        Together, we're founders building brands we truly believe in.
      </h1>
      <button className="bg-yellow-400 text-sm sm:text-base text-black font-extrabold py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 mb-6">
        Explore Plans
      </button>
      <div className="bg-gray-200 rounded-lg w-full mx-auto h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
        <img 
          src={assets.abouthero} 
          alt="groupimg" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FoundersBrandComponent;
