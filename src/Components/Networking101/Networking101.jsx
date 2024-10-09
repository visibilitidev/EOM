import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa'; // Importing the play icon from react-icons

const Networking101 = () => {
  const [activeVideo, setActiveVideo] = useState(null); // State to track the currently playing video

  const videos = [
    {
      title: "Private Dinner With Million Dollar Brand Founder",
      series: "Founders Meet-Up Series 02",
      image: "public/network1.png",
      videoUrl: "https://www.youtube.com/embed/wtkoBjXsiBQ?si=At8YdyZOhchlI-lg",
      darkOverlay: true // Add a flag for the overlay
    },
    {
      title: "Entrepreneurs Of Madras Club Edition 1",
      series: "Launched by 200Cr Brand Owner & 15+",
      image: "public/network2.png",
      videoUrl: "https://www.youtube.com/embed/X5zncoKqohk?si=KBycNn9JSjREEOGU",
      darkOverlay: false
    },
    {
      title: "Private Dinner With An Investor",
      series: "Founders Meet-Up Series 01",
      image: "public/network3.png",
      videoUrl: "https://www.youtube.com/embed/90B8SxhbuHA?si=tJ279hXdJBkwvvvW",
      darkOverlay: true
    }
  ];

  const handlePlayVideo = (index) => {
    setActiveVideo(index); // Set the active video when clicked
  };

  return (
    <div className="flex flex-col items-center py-20 bg-white">
      <h2 className="text-3xl font-bold text-center">Networking 101</h2>
      <p className="text-center text-gray-500 mb-8">Meet quality people to conquer</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="w-full max-w-xs mx-auto">
            <div className="relative group">
              {activeVideo === index ? (
                // Display the video iframe when clicked
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={video.videoUrl}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              ) : (
                // Display the thumbnail with overlay and play button
                <>
                  <img src={video.image} alt={video.title} className="rounded-lg shadow-lg w-full" />
                  
                  {video.darkOverlay && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> // Black overlay
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                    <FaPlayCircle
                      size={64}
                      className="text-white opacity-80 hover:opacity-100"
                      onClick={() => handlePlayVideo(index)} // Play the video on click
                    />
                  </div>
                </>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-base ">{video.title}</h3>
              <p className="text-base ">{video.series}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Networking101;
