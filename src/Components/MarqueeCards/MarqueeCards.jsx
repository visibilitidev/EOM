import React from 'react';
import './MarqueeCards.css';
import { assets } from '../../assets/assets';

const MarqueeCards = () => {
  const images = [
    assets.club1,
    assets.club2,
    assets.club3,
    assets.club4,
    assets.club5,
    assets.club6,
    assets.club7,
    assets.club8,
    assets.club9,
  ];

  return (
    <div className="overflow-hidden py-24">
      <div className="marquee">
        <div className="track">
          {images.map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`Card ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate the images within the same div to create the seamless effect */}
          {images.map((image, index) => (
            <div key={index + images.length} className="card">
              <img src={image} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeCards;