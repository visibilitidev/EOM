import React, { useState } from "react";
import CtaCarousel from "../../Components/CtaCarousal/CtaCarousal";
import ArticleGrid from "../../Components/CarousalContainer/CarousalContainer";
import GridBlog from "../../Components/GridBlog/GridBlog";

import GridComponent from "../../Components/GridComponent/GridComponent";
import Blog7 from "../../Components/BlogData/Blog7/Blog7";

export default function Resources() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleArticleClick = (index) => {
    setSelectedSlide(index);
  };

  return (
    <>
      <CtaCarousel selectedSlide={selectedSlide} />
      <ArticleGrid onArticleClick={handleArticleClick} />
      {/* <GridBlog /> */}
      <GridComponent />
    </>
  );
}
