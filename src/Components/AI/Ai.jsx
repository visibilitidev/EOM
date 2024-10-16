import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AIChatComponent = ({heading, imgsrc}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='my-2 sm:mt-[-10rem] md:mt-[-10rem]'>
    <h2 className="text-2xl lg:text-3xl font-bold  text-center"> {/* Center text */}
    {heading}
  </h2>
    <div className="flex flex-col lg:flex-row mx-auto md:max-w-5xl items-center justify-center lg:justify-between md:gap-20 lg:px-20 p-8 lg:py-16">
      {/* Left side with image (Message Box) */}
      <div className="lg:w-1/2 md:scale-125 flex justify-center mb-8 lg:mb-0">
        <img
          src={imgsrc} // Replace with your image path
          alt="AI Chat"
          className="w-full max-w-sm"
        />
      </div>

      {/* Right side - Accordion */}
      <div className="w-[100%] lg:w-1/2 space-y-4">
       

        {/* Accordion Item 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 0 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <h3 className="font-semibold text-lg">What's The Hype On Madrasi Connect?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 0 && (
            <p className="mt-2 text-black">
              Our Madrasi Connect is your go-to AI-driven assistant, built exclusively for the members of EOM club to make networking easier & efficient than ever.
            </p>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 1 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="font-semibold text-lg">You Get Tailored Matches, Instantly</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 1 && (
            <p className="mt-2 text-black">
              Find people and opportunities that match your interests instantly using AI.
            </p>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 2 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(2)}
          >
            <h3 className="font-semibold text-lg">How Does Madrasi Connect Work?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 2 && (
            <p className="mt-2 text-black">
              Madrasi Connect uses AI to analyze your profile and suggest personalized connections and content.
            </p>
          )}
        </div>

        {/* Accordion Item 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 3 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(3)}
          >
            <h3 className="font-semibold text-lg">Instant Recommendations With AI</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 3 && (
             <p className="mt-2 text-black">
              AI provides instant recommendations for connections and opportunities based on your preferences.
            </p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default AIChatComponent;
