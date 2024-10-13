import React, { useEffect, useRef } from 'react';
import './MarqueeImages.css'; // Import CSS for custom styles
import { assets } from '../../assets/assets';


const MarqueeImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;

        // Scroll right to left, if scrollLeft is 0, reset to the maximum scroll
        if (scrollLeft <= 0) {
          containerRef.current.scrollLeft = scrollWidth - clientWidth;
        } else {
          containerRef.current.scrollLeft -= 1; // Decrement to scroll left to right
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust the scroll speed as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const images = [
    assets.marquee1,
    assets.marquee2,
    assets.marquee3,
    assets.marquee4,
    assets.marquee5,
    assets.marquee6,
    assets.marquee7,
    assets.marquee8,
    assets.marquee9,
    assets.marquee10,
  ];

  return (
    <div
      className="scroll-container overflow-x-auto whitespace-nowrap no-scrollbar bg-slate-100 py-8 mb-22"
      ref={containerRef}
    >
      <div className="inline-flex space-x-6">
        {images.map((image, index) => (
          <div key={index} className="w-80 h-80 p-2 bg-white rounded-3xl shadow-md">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
        {/* Duplicate the images for smooth continuous scrolling */}
        {images.map((image, index) => (
          <div key={`dup-${index}`} className="w-80 h-80 p-2 bg-white rounded-lg shadow-md">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeImages;
