import React, { useState } from "react";
import GridOneComponent from "../GridOneComponent/GridOneComponent";
import { assets } from "../../assets/assets";
import NewsAd from "../NewsAd/NewsAd";
import Trending from "../TrendingPost/TrendingPost";
import CommonGrid from "../CommonGrid/CommonGrid";
import Blog from "../../Pages/Blog/Blog";

const GridComponent = () => {
  const [selectedBlog, setSelectedBlog] = useState(null); // Track selected blog

  const sampleArticles = [
    {
      id: 1,
      image: assets.aboutimg,
      category: "Startup Growth",
      title:
        "21 Most common mistakes companies make when scaling too fast + Examples",
      excerpt:
        "Every time I hear about companies scaling too fast, I think of that one friend who decides to run a marathon without training. Like, “Sure, you can run! You just did a 5K last year! Go for it!”",
      timeAgo: "1h",
    },
  ];

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6 mt-20">
      <div className="col-span-2 row-span-2">
        {sampleArticles.map((article, index) => (
          <GridOneComponent
            id={index}
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            excerpt={article.excerpt}
            timeAgo={article.timeAgo}
            bigComponent={article?.bigComponent || false}
          />
        ))}
      </div>
      <div className="row-span-2 col-start-4 row-start-1">
        <NewsAd />
      </div>
      <div className="col-start-3 row-start-1">
        <CommonGrid
          key={1}
          image={assets.aboutimg2}
          category="Finance"
          title="How big Rs 1 Lakh can grow? Power of Compounding - The Rule of 114 & 144"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog6")}
        />
      </div>
      <div className="col-start-3 row-start-2">
        <CommonGrid
          key={2}
          image={assets.marquee1}
          category="Women Empowerment"
          title="7 Latest government schemes to support women startups 2025"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog7")}
        />
      </div>
      <div className="row-span-2 row-start-3">
        <Trending />
      </div>
      <div className="row-start-3">
        <CommonGrid
          key={3}
          image={assets.marquee2}
          category="Women Empowerment"
          title="Top 8 Tamil Nadu State Government Schemes in 2025 for Women Startups"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog8")}
        />
      </div>
      <div className="col-start-2 row-start-4">
        <CommonGrid
          key={4}
          image={assets.marquee3}
          category="Finance"
          title="12 Sources of Startup Capital You MUST know about"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog6")}
        />
      </div>
      <div className="col-start-3 row-start-3">
        <CommonGrid
          key={5}
          image={assets.marquee4}
          category="Startup"
          title="What Investors Look for in Startups"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog7")}
        />
      </div>
      <div className="col-start-3 row-start-4">
        <CommonGrid
          key={6}
          image={assets.marquee6}
          category="Government Initiatives"
          title="Top 4 Key Initiatives in Startup India Funding Support"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog8")}
        />
      </div>
      <div className="col-start-4 row-start-3">
        <CommonGrid
          key={7}
          image={assets.marquee7}
          category="Startup Growth"
          title="Growth Vs Scaling! 5 Kickass Strategies Scale Growth (2025 Edition)"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog6")}
        />
      </div>
      <div className="col-start-4 row-start-4">
        <CommonGrid
          key={8}
          image={assets.marquee8}
          category="Startup Growth"
          title="21 Most common mistakes companies make when scaling too fast + Examples"
          timeAgo="2mo"
          commentsCount={5}
          onClick={() => handleBlogClick("blog7")}
        />
      </div>

      {selectedBlog && <Blog selectedBlog={selectedBlog} />}
    </div>
  );
};

export default GridComponent;
