import React from 'react';
import { assets } from '../../assets/assets';

const EomRightForYou = () => {
  const criteria = [
    "Have already built a strong, profitable business and are looking to scale further",
    "Crave real, no-BS conversations with other high-level entrepreneurs",
    "Seek insights from others who understand the specific challenges of growth and expansion",
    "Ready to help & be helped - Believe in rising together",
    "Value private, unfiltered discussions over broad, generic advice",
    "Need assistance in finding experienced & trusted service partners"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl lg:-mt-12 mb-24">
      <div className="text-center flex flex-col items-center md:text-left mb-8">
        <h2 className="text-3xl font-bold mb-2">Is EOM Right For You?</h2>
        <p className="text-lg">Entrepreneurs of Madras is for founders who:</p>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="w-full lg:w-1/2 max-w-xl">
          <ul className="space-y-4">
            {criteria.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1 text-xl">●</span>
                <span className="text-base sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full lg:w-1/2 max-w-xl relative">
        <div className="bg-gray-200 rounded-xl aspect-[4/3] w-full overflow-hidden">
  <img 
    src={assets.aboutimg2} // Replace 'yourImage' with the actual image reference
    alt="Description of the image" 
    className="w-full h-full object-cover"
  />
</div>

          <div className="hidden sm:block absolute -bottom-24 -right-16 md:-bottom-16 md:-right-20 w-48 h-52 md:w-[236.32px] md:h-[209.47px] gap-0 rotate-[-15.78deg]">
              <img src={assets.trophy} alt=''/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EomRightForYou;