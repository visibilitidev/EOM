import React, { useRef, useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'; // Import the pause icon
import { assets } from '../../assets/assets';
import './HeroSection.css';

const HeroSection = () => {
  // Create a ref for the video element
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to manage video visibility

  // Function to play/pause the video
  const handlePlayPauseVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  return (
    <div className="relative w-full mx-auto p-4 font-sans mb-8">
      {/* Background Image */}
      <img
        src={assets.central}
        alt="Palace Background"
        className="mt-40 reflection opacity-20 absolute inset-0 w-full h-full object-contain z-0"
      />
      
      <div className="relative z-10 text-center mb-8">
        <p className="text-base uppercase tracking-wide mb-4 font-OpenSans">Start strong, scale stronger with</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-Montserrat">THE FINEST<br />FOUNDERS-ONLY CLUB</h1>
        <p className="text-lg mx-auto mb-4 font-OpenSans md:max-w-[45%]">EOM is an exclusive community for growth-focused entrepreneurs who are ready for the next big leap.</p>
        <button className="bg-yellow-400 text-black font-extrabold  px-4 rounded-lg hover:bg-yellow-500 transition duration-300 text-lg" style={{ height: '45px' }}>
          Become a Member
        </button>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <img src={assets.sun} className="w-28 h-28 rounded-full" alt="Sun Icon" />
        </div>
        <div className="border-4 max-w-3xl mx-auto border-black rounded-lg overflow-hidden relative">
          {/* Video Element */}
          <video 
            ref={videoRef}
            src={assets.heroVideo} // Ensure this path is correct
            className={`w-full h-auto object-cover ${isPlaying ? 'block' : 'hidden'}`} // Toggle visibility based on state
          >
            <source src={assets.heroVideo} type="video/mp4" /> {/* Ensure the correct type */}
            Your browser does not support the video tag.
          </video>
          <img src={assets.videoimg} alt="Founders meeting" className={`w-full h-auto object-cover ${isPlaying ? 'hidden' : 'block'}`} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            {/* Show play or pause icon based on isPlaying state */}
            {!isPlaying ? (
              <FaPlayCircle
                size={64}
                className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                onClick={handlePlayPauseVideo} // Call the play function
              />
            ) : (
              <FaPauseCircle
                size={64}
                className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                onClick={handlePlayPauseVideo} // Call the pause function
              />
            )}
          </div>
        </div>
      </div>

      {/* Optional SVG for decorative effect */}
      {/* <div className="mt-8">
        <svg className="w-full h-24" viewBox="0 0 400 100">
          <path d="M0,50 Q100,0 200,50 T400,50" fill="none" stroke="#000" strokeWidth="2" />
        </svg>
      </div> */}
    </div>
  );
};

export default HeroSection;
