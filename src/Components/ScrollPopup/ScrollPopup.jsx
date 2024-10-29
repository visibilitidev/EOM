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
        <div className="fixed inset-0 bg-blue-900 bg-opacity-80 flex items-center justify-center z-50">
            <button
              onClick={closePopup}
              className="absolute top-10 right-20 text-white hover:text-gray-800 text-2xl font-bold"
            >
              &#10005;
            </button>
          <div className="relative p-6 rounded-lg  w-1/3 ">
          
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
