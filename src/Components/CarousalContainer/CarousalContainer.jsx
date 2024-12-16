// ArticleGrid.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles


const ArticleGrid = ({ onArticleClick, blogList }) => {
  const [activeId, setActiveId] = useState(0); // Default active is the first article

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
      {blogList.map((article, index) => (
        <SwiperSlide key={article.id}>
          <div
            onClick={() => handleArticleClick(index)}
            className={`p-4 flex flex-row gap-2 items-center cursor-pointer transition-colors duration-300 ${activeId === index ? "bg-blue text-white" : article.bgColor
              }`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-16 h-16 object-cover"
            />
            <h2 className="text-base font-semibold leading-4">{article.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArticleGrid;
