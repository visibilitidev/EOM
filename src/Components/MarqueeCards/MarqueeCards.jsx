import React from 'react';
import './MarqueeCards.css';

const MarqueeCards = () => {
  const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);

  return (
    <div className="overflow-hidden py-24">
      <div className="marquee">
        <div className="track">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card"
            >
              {card}
            </div>
          ))}
          {/* Duplicate the cards within the same div to create the seamless effect */}
          {cards.map((card, index) => (
            <div
              key={index + 12}  // Adjust key for the second batch
              className="card"
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeCards;
