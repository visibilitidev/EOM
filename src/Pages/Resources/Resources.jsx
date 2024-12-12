import React, { useState } from "react";
import CtaCarousel from "../../Components/CtaCarousal/CtaCarousal";
import ArticleGrid from "../../Components/CarousalContainer/CarousalContainer";
import GridBlog from "../../Components/GridBlog/GridBlog";
import { assets } from "../../assets/assets";

import GridComponent from "../../Components/GridComponent/GridComponent";
import Blog7 from "../../Components/BlogData/Blog7/Blog7";

export default function Resources() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleArticleClick = (index) => {
    setSelectedSlide(index);
  };

  const blogList = [
    {
      id: 1,
      image: assets.blog1,
      category: "Finance",
      title: "12 Sources of Startup Capital You MUST know about",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: true,
      description: "Discover our latest summer styles",
    },
    {
      id: 2,
      image: assets.investorsLook9,
      category: "Startup",
      title: "What Investors Look for in Startups",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false,
      description: "Check out our newest products",
    },
    {
      id: 3,
      image: assets.top4keyInitiatives,
      category: "Government Initiatives",
      title: "Top 4 Key Initiatives in Startup India Funding Support",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false,
      description: "Get up to 50% off on selected items",
    },
    {
      id: 4,
      image: assets.growth_scaling,
      category: "Startup Growth",
      title: "Growth Vs Scaling! 5 Kickass Strategies Scale Growth (2025 Edition)",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false,
      description: "Get up to 50% off on selected items",
    },
    {
      id: 5,
      image: assets.MostCommon21,
      category: "Startup Growth",
      title: "21 Most common mistakes companies make when scaling too fast + Examples",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false
    },
    {
      id: 6,
      image: assets.how_big_1Lakh,
      category: "Finance",
      title: "How big Rs 1 Lakh can grow? Power of Compounding - The Rule of 114 & 144",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false
    },
    {
      id: 7,
      image: assets.seven_latest,
      category: "Women Empowerment",
      title: "7 Latest government schemes to support women startups 2025",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false
    },
    {
      id: 8,
      image: assets.top8TN,
      category: "Women Empowerment",
      title: "Top 8 Tamil Nadu State Government Schemes in 2025 for Women Startups",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false
    },
    {
      id: 9,
      image: assets.investorsLook9,
      category: "Startup",
      title: "What Investors Look for in Startups",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false,
      description: "Check out our newest products",
    },
    {
      id: 10,
      image: assets.top4keyInitiatives,
      category: "Government Initiatives",
      title: "Top 4 Key Initiatives in Startup India Funding Support",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false,
      description: "Get up to 50% off on selected items",
    },
    {
      id: 11,
      image: assets.growth_scaling,
      category: "Startup Growth",
      title: "Growth Vs Scaling! 5 Kickass Strategies Scale Growth (2025 Edition)",
      timeAgo: "2mo",
      commentsCount: 5,
      bigComponent: false,
      description: "Get up to 50% off on selected items",
    },
  ];

  return (
    <>
      <CtaCarousel selectedSlide={selectedSlide} blogList={blogList} />
      <ArticleGrid onArticleClick={handleArticleClick} />
      <GridBlog blogList={blogList} />
      {/* <GridComponent /> */}
    </>
  );
}
