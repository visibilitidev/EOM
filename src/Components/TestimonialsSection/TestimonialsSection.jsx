import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TestimonialGrid = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust the scroll speed as needed

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll when it reaches half the width for seamless looping
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(autoScroll, 20); // Controls the speed of the scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-blue p-4 md:py-8 my-12 relative min-h-screen h-[855px] lg:block overflow-hidden">
      <p className='text-base font-medium w-2/3 text-center text-white mx-auto mb-6'>
        You can keep scrolling through the 100s of testimonials on this page alone. 
        Or, take the first step in becoming one of our “impact” stories.
      </p>

      <div
        className="flex overflow-x-hidden space-x-8 p-8 whitespace-nowrap"
        ref={scrollContainerRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Duplicate testimonials to create seamless infinite scroll */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {/* Testimonial 1 */}
            <div className="w-[300px] h-[600px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src="public/ln1.png"
                alt="Testimonial 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial 2 */}
            <div className="w-[300px] h-[500px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src="public/linkedin3.png"
                alt="Testimonial 2"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial 3 */}
            <div className="w-[300px] h-[620px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src="public/ln4.png"
                alt="Testimonial 3"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial 4 */}
            <div className="w-[300px] h-[550px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src="public/ln5.png"
                alt="Testimonial 4"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial 5 */}
            <div className="w-[300px] h-[630px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src="public/ln7.png"
                alt="Testimonial 5"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      <p className='font-medium text-base flex items-center text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:text-gray-200 cursor-pointer'>
        See More <FaArrowRight className="ml-2" />
      </p>
    </div>
  );
};

export default TestimonialGrid;
