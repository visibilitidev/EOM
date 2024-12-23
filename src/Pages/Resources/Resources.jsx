import React, { useState } from "react";
import CtaCarousel from "../../Components/CtaCarousal/CtaCarousal";
import ArticleGrid from "../../Components/CarousalContainer/CarousalContainer";
import GridBlog from "../../Components/GridBlog/GridBlog";
import { useNavigate } from "react-router-dom";
import { blogList } from "../../data/blogs";

export default function Resources() {

  const navigate = useNavigate();

  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleArticleClick = (index) => {
    setSelectedSlide(index);
  };

  const goToBlog = (slide) => {
    const blogUrl = slide.title.toLowerCase().replace(/ /g, "-"); // Replace spaces with hyphens
    navigate(`/resources/${blogUrl}`, {
      state: {
        componentId: slide.id, // Pass the component ID or other required state
      },
    });
  };





  return (
    <>
      <CtaCarousel selectedSlide={selectedSlide} blogList={blogList} handleBlogClick={goToBlog} />
      <ArticleGrid blogList={blogList} onArticleClick={handleArticleClick} />
      <GridBlog blogList={blogList} handleBlogClick={goToBlog} />
      {/* <GridComponent /> */}
    </>
  );
}
