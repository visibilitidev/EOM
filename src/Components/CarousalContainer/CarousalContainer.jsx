// ArticleGrid.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { assets } from '../../assets/assets';

const ArticleGrid = ({ onArticleClick }) => {
  const [activeId, setActiveId] = useState(0); // Default active is the first article

  const articles = [
    {
      id: 1,
      image: assets.marquee1,
      title: 'The Importance of Sleep: Tips for Better Rest and Recovery',
      bgColor: 'bg-gray-100'
    },
    {
      id: 2,
      image: assets.marquee1,
      title: 'The Future of Sustainable Living: Driving Eco-Friendly...',
      bgColor: 'bg-gray-100'
    },
    {
      id: 3,
      image: assets.marquee1,
      title: 'Business Agility in the Digital Age: Leveraging AI and Automation',
      bgColor: 'bg-gray-100'
    },
    {
      id: 4,
      image: assets.marquee1,
      title: 'The Art of Baking: From Classic Bread to Artisan Pastries',
      bgColor: 'bg-gray-100'
    }
  ];

  const handleArticleClick = (index) => {
    setActiveId(index);
    onArticleClick(index); // Trigger the corresponding slide in the CTA carousel
  };

  return (
    <Swiper
      spaceBetween={10} // Space between slides
      slidesPerView={1} // Show one slide at a time
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {articles.map((article, index) => (
        <SwiperSlide key={article.id}>
          <div
            onClick={() => handleArticleClick(index)}
            className={`p-4 flex flex-row gap-2 items-center cursor-pointer transition-colors duration-300 ${
              activeId === index ? 'bg-blue text-white' : article.bgColor
            }`}
          >
            <img src={article.image} alt={article.title} className="w-16 h-16 object-cover" />
            <h2 className="text-lg font-semibold">{article.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArticleGrid;
