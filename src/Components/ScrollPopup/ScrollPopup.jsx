import React, { useEffect, useState } from "react";
import { assets } from '../../assets/assets'


const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !hasScrolled) {
        setShowPopup(true);
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);


  const closePopup = () => setShowPopup(false);


  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex flex-col-reverse items-center justify-center z-50">
          {/* Dark overlay with reduced opacity and brightness */}
          <div className="absolute inset-0 bg-[#000101ba] backdrop-blur-sm"></div>

          {/* Button container */}
          <div className="bg-yellow-400 px-4 inline-block rounded-lg hover:bg-white hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.8)] transition-shadow duration-300 z-10">
            <button
              className="text-black font-extrabold py-2 px-4 rounded-lg transition duration-300 text-lg transform hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md active:translate-y-1 active:shadow-lg"
              style={{ height: '45px' }}
              onClick={() => window.location.href = 'https://forms.gle/UwngrgMeVzgzxHuD8'}
            >
              Register Now
            </button>
          </div>

          {/* Popup content container */}
          <div className="relative p-6 w-[90%] md:w-[63%] lg:w-5/12 z-10">
            <button
              onClick={closePopup}
              className="absolute top-6 right-8 text-white hover:text-gray-800 text-2xl font-bold z-20"
            >
              &#10005;
            </button>

            <img
              src={assets.popup}
              alt="Popup"
              className="w-full h-auto rounded-md border-yellow-300 border-solid border-[1px]"
            />
          </div>
        </div>

      )}
    </>
  );
};

export default ScrollPopup;
