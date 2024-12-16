import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const CtaCarousel = ({ selectedSlide, blogList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentSlide(selectedSlide);
  }, [selectedSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogList.length) % blogList.length);
  };
  const goToBlog = (slide) => {
    navigate("/blog", {
      state: {
        title: slide.title,
        image: slide.image,
        componentId: slide.id,
      },
    });
  };


  return (
    <div className="relative w-full h-96 md:h-[31.25rem] overflow-hidden">
      {/* blogList */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {blogList.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-8">
              <h2
                className="text-2xl md:text-5xl text-center font-bold mb-8 w-1/2"
                style={{ lineHeight: "1.25" }}
              >
                {slide.title}
              </h2>

              <button
                onClick={() => goToBlog(slide)}
                className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {blogList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CtaCarousel;
