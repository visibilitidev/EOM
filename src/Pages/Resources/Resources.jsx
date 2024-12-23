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

  const generateBlogUrl = (title) => {
    // Remove all special characters, replace spaces with hyphens, and clean up multiple hyphens
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")  // Remove special characters
      .replace(/\s+/g, "-")          // Replace spaces with hyphens
      .replace(/-+/g, "-")           // Replace multiple hyphens with a single hyphen
      .replace(/^-+/, "")            // Remove leading hyphens
      .replace(/-+$/, "");           // Remove trailing hyphens
  };


  const goToBlog = (slide) => {
    const blogUrl = generateBlogUrl(slide.title) // Replace spaces with hyphens
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
