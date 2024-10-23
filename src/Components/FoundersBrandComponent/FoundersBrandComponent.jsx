import React from 'react';
import { assets } from '../../assets/assets';
import './FoundersBrandComponent.css';

const FoundersBrandComponent = () => {
  const handleExplorePlans = () => {
    const element = document.getElementById('membership-plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 text-center">
      <h1 className="text-2xl head-font sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-Montserrat md:max-w-[80%] mx-auto leading-snug lg:leading-tight">
  Together, we're founders building brands we truly believe in.
</h1>

      <div className="bg-yellow-400 hover:bg-yellow-500 inline-block mb-14 rounded-lg">
        <button
          className="text-sm sm:text-base text-black font-extrabold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md active:translate-y-1 active:shadow-lg"
          onClick={handleExplorePlans}
        >
          Explore Plans
        </button>
      </div>
      <div className="bg-gray-200 rounded-lg w-full mx-auto h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={assets.abouthero}
          alt="groupimg"
          className="w-full h-full object-cover scale-110"
        />
      </div>
    </div>
  );
};

export default FoundersBrandComponent;