import React from "react";
import GridOneComponent from "../GridOneComponent/GridOneComponent";
import { assets } from "../../assets/assets";
import CommonGrid from "../CommonGrid/CommonGrid";
import Trending from "../TrendingPost/TrendingPost";
import NewsAd from "../NewsAd/NewsAd";
import styles from './GridBlog.module.css'
import { useNavigate } from "react-router-dom";

export default function GridBlog({ blogList }) {

  const navigate = useNavigate();

  const handleBlogClick = (componentId, title, image) => {
    navigate("/blog", {
      replace: true,  // Use replace to avoid adding extra history entries
      state: { title, image, componentId }
    });
  };



  return (
    <>
      <div className={styles.blogContainer}>
        {blogList.map((article, index) => {
          const isBigComponent = article?.bigComponent || false;

          // Adjusting the grid index for regular articles
          let gridIndex = index;

          // Handle when the index is 3 and 4 for NewsAd and Trending
          if (index === 3) {
            // Skip rendering the article at index 3 and render NewsAd in the 4th position
            return (
              <React.Fragment key={article.id}>
                <div className={styles.gridItem4}>
                  <NewsAd />
                </div>
              </React.Fragment>
            );
          }

          if (index === 4) {
            // Skip rendering the article at index 4 and render Trending in the 5th position
            return (
              <React.Fragment key={article.id}>
                <div className={styles.gridItem5}>
                  <Trending />
                </div>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={article.id}>
              {/* Render article components with dynamic grid item class */}
              <div
                className={isBigComponent ? styles.gridItem1 : styles[`gridItem${gridIndex + 1}`]}
                onClick={() => handleBlogClick(article.id, article.title, article.image)} // Handle blog click
              >
                {isBigComponent ? (
                  <GridOneComponent
                    id={gridIndex}
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    timeAgo={article.timeAgo}
                  />
                ) : (
                  <CommonGrid
                    key={article.id}
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    timeAgo={article.timeAgo}
                    commentsCount={article.commentsCount}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}



        {/* {samplePosts.map((article) => (
          <CommonGrid
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            timeAgo={article.timeAgo}
            commentsCount={article.commentsCount}
          />
        ))} */}
      </div>
    </>
  );
}
