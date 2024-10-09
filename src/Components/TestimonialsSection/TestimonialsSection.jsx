import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TestimonialGrid = () => {
  return (
    <div className="bg-blue p-4 md:py-8 my-12 relative min-h-screen h-[855px] hidden lg:block">
      <p className='text-base font-medium w-2/3 text-center text-white mx-auto mb-6'>
        You can keep scrolling through the 100s of testimonials on this page alone. 
        Or, take the first step in becoming one of our “impact” stories.
      </p>
      <div className='relative flex justify-center mt-4'>
     
        <div className="ln1 absolute w-[372px] h-[626.71px] -top-0 -left-48 bg-white  rounded-xl border-2 border-yellow-400 ">
          <img 
            src='public/ln1.png' 
            alt='Testimonial 1' 
            className="object-cover" 
          />
        </div>

      
        <div className="ln2 absolute w-[306px] h-[286px] -top-0 left-48 bg-white  rounded-xl border-2 border-yellow-400 ">
          <img 
            src='public/ln2.png' 
            alt='Testimonial 1' 
            className="object-cover"
          />
        </div>
        <div className="ln3 absolute w-[306px] h-[286px] top-[300px]  left-48 bg-white  rounded-xl border-2 border-yellow-400 ">
          <img 
            src='public/ln3.png' 
            alt='Testimonial 1' 
            className="object-cover"
          />
        </div>
        <div className="ln4 absolute w-[312px] h-[596px] top-0  left-[510px] bg-white  rounded-xl border-2 border-yellow-400 ">
          <img 
            src='public/ln4.png' 
            alt='Testimonial 1' 
            className="object-cover" 
          />
        </div>
        <div className="ln5 absolute w-[302px] h-[520px] top-0  right-24 bg-white  rounded-xl border-2 border-yellow-400 ">
          <img 
            src='public/ln5.png' 
            alt='Testimonial 1' 
            className="object-cover" 
          />
        </div>
        <div className="ln6 absolute w-[302px] h-[598px] top-0  -right-[218px] bg-white  rounded-xl border-2 border-yellow-400 ">
          <img 
            src='public/ln7.png' 
            alt='Testimonial 1' 
            className="object-cover" 
          />
        </div>
      </div>
      <p className='font-medium text-base flex items-center text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:text-gray-200 cursor-pointer'>
      See More <FaArrowRight className="ml-2" />
    </p>
    </div>
  );
};

export default TestimonialGrid;