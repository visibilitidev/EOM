import React from 'react';

const FoundersBrandComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center ">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-Montserrat md:max-w-[80%] mx-auto">
        Together, we're founders building brands we truly believe in.
      </h1>
      <button className="bg-yellow-400 text-base text-black font-extrabold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 mb-8">
        Explore Plans
      </button>
      <div className="bg-gray-200 rounded-lg aspect-video w-full mx-auto h-80 flex items-center justify-center">
        <p className="text-gray-500 text-xl">Group Photo</p>
      </div>
    </div>
  );
};

export default FoundersBrandComponent;