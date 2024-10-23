import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AIChatComponent = ({heading, imgsrc}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const email = 'entrepreneursofmadras@gmail.com.';
  const tel = '+91 97107 27517';
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
            <h3 className="font-semibold text-lg">Do I have to be an entrepreneur to join?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 0 && (
            <p className="mt-2 text-black">
             Yes, EOM is a super exclusive club for growth-stage founders who are in their 10-100 journey. If you're an aspiring entrepreneur or startup enthusiast, you can always join our Underdogs of Madras community for free <a href='https://nas.io/theunderdogs' className='text-blue-950 font-bold hover:text-blue-900 active:text-blue-950 '>https://nas.io/theunderdogs</a> .
            </p>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 1 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="font-semibold text-lg">What are the cities that you’re present in? </h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 1 && (
            <p className="mt-2 text-black">
             EOM Club is a digital community. Our in-person events majorly take place in Chennai. Founders in our club are spread across all districts of Tamil Nadu, Bangalore, Hyderabad & Mumbai. Our mentors & VCs are invested across India.
            </p>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 2 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(2)}
          >
            <h3 className="font-semibold text-lg">Can I cancel my membership?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 2 && (
            <p className="mt-2 text-black">
             If you’re disappointed or have feedback, reach out to us at <a href={`mailto:${email}`} className='text-blue-950 font-bold hover:text-blue-900 active:text-blue-950'>entrepreneursofmadras@gmail.com.</a>
            </p>
          )}
        </div>

        {/* Accordion Item 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 3 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(3)}
          >
            <h3 className="font-semibold text-lg">Is my membership transferable?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 3 && (
             <p className="mt-2 text-black">
             No, the EOM club’s annual membership is for individual use only. One phone number per membership and only that person can attend in-person events. Misuse may result in termination with no refunds.
            </p>
          )}
        </div>

         {/* Accordion Item 5 */}
         <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 3 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(4)}
          >
            <h3 className="font-semibold text-lg">How long is my membership valid?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 4 && (
             <p className="mt-2 text-black">
            Your membership lasts for one year from the date of purchase.
            </p>
          )}
        </div>

         {/* Accordion Item 6 */}
         <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 3 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(5)}
          >
            <h3 className="font-semibold text-lg">Can I get a refund if I change my mind?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 5 && (
             <p className="mt-2 text-black">
               Sorry! We have a no-refund policy since you get full access to everything as soon as you join.
            </p>
          )}
        </div>

         {/* Accordion Item 6 */}
         <div className="bg-white rounded-lg shadow-md p-4">
          <div
            className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 3 ? 'border-b-2 border-gray-500' : ''}`}
            onClick={() => toggleAccordion(6)}
          >
            <h3 className="font-semibold text-lg">Still have questions?</h3>
            <span>{activeIndex === 0 ? <ChevronUp  className='bg-yellow-500 rounded-full text-white'/> : <ChevronDown className='bg-yellow-500 rounded-full text-white'/>}</span>
          </div>
          {activeIndex === 6 && (
             <p className="mt-2 text-black">
          Drop us a message at <a href={`mailto:${email}`} className='text-blue-950 font-bold hover:text-blue-900 active:text-blue-950'>entrepreneursofmadras@gmail.com.</a> or on WhatsApp at <a href={`tel:${tel}`} className='text-blue-950 font-bold hover:text-blue-900 active:text-blue-950'>+91 97107 27517</a>, and we’ll get back to you!
            </p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default AIChatComponent;
