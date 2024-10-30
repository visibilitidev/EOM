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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-[#000101ba] bg-opacity-80 backdrop-blur-sm"></div>

          <button
            onClick={closePopup}
            className="absolute bottom-[5%] md:bottom-[90%] md:right-[5%] text-white hover:text-gray-800 text-2xl font-bold"
          >
            &#10005;
          </button>
          <div className="relative p-6 w-full sm:w-10/12 md:w-9/12 lg:w-5/12">

            <img
              src={assets.popup}
              alt="Popup"
              className="w-full h-auto rounded-md"
            />

          </div>
        </div>
      )}
    </>
  );
};

export default ScrollPopup;
