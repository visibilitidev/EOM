import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";

// Card Data Array
const cardData = [
  {
    title: ["Candid", "Conversations"],
    imgSrc: assets.img3c,
    imgWidth: "223px",
    imgHeight: "246px",
    description:
      "Get the chance to engage in honest, no-nonsense discussions with fellow founders. Share your challenges, explore opportunities, gain insights from those who’ve faced similar crossroads.",
    imgPosition: { bottom: "0", right: "-30px" },
    scale: { scale: 1.2, flip: true },
  },
  {
    title: ["Founder-To-", "Founder Support"],
    imgSrc: assets.img1,
    imgWidth: "236px",
    imgHeight: "256px",
    description:
      "It’s not advice from outsiders. Here it’s founders helping founders—people who had the same pressure of leading, scaling & sustaining a successful business like you.",
    imgPosition: { bottom: "-30px", right: "-30px" },
    scale: { scale: 1.2, flip: false },
  },
  {
    title: ["Curated", "Knowledge"],
    imgSrc: assets.img5c,
    imgWidth: "200px",
    imgHeight: "220px",
    description:
      "Access insider strategies, cutting-edge growth tactics, and candid case studies that go beyond the surface, curated exclusively for businesses looking to scale big.",
    imgPosition: { bottom: "0", right: "-20px" },
    scale: { scale: 1.1, flip: false },
  },
  {
    title: ["Closed-Door", "Events"],
    imgSrc: assets.img4c,
    imgWidth: "215px",
    imgHeight: "336px",
    description:
      "Our community thrives on private events—exclusive dinners, meetups, roundtables—where entrepreneurs can exchange questions & experiences in a safe, trusted space.",
    imgPosition: { bottom: "-80px", right: "-15px" },
    scale: { scale: 1.2, flip: false },
  },
  {
    title: ["Focus on", "Scaling"],
    imgSrc: assets.img2c,
    imgWidth: "210px",
    imgHeight: "240px",
    description:
      "Whether it’s cracking new markets, raising your brand’s profile, or meeting investors, EOM is all about empowering you to take your business to new heights.",
    imgPosition: { bottom: "-46px", right: "-25px" },
    scale: { scale: 1.2, flip: false },
  },
  {
    title: ["Masterclass", "Sessions"],
    imgSrc: assets.img6c,
    imgWidth: "178px",
    imgHeight: "200px",
    description:
      "Expert-led sessions where specialists from critical domains related to business share actionable, technical insights, tools and techniques to help your business grow.",
    imgPosition: { bottom: "0px", right: "-15px" },
    scale: { scale: 1.2, flip: false },
  },
];

const WhyEOM = () => {
  return (
    <div className="relative max-w-full flex flex-col justify-center mb-8 py-12 overflow-hidden">
      <img
        src={assets.palace}
        alt="Background"
        className="hidden md:block absolute inset-0 w-full h-full object-contain -z-10"
      />

      <h1 className="font-Montserrat font-bold text-3xl text-center my-1">
        Why is EOM one of a kind?
      </h1>
      <h5 className="font-OpenSans text-lg font-normal text-center my-2">
        This isn’t just another networking group. Here’s what sets us apart:
      </h5>

      <div className="w-5/6 max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-8">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  title,
  imgSrc,
  imgWidth,
  imgHeight,
  description,
  imgPosition,
  scale,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Check screen width to apply appropriate behavior
  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile()) return; // Skip observer for larger screens

    const observer = new IntersectionObserver(
      ([entry]) => setIsHovered(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile()) setIsHovered(true); // Enable hover effect on larger screens
  };

  const handleMouseLeave = () => {
    if (!isMobile()) setIsHovered(false); // Disable hover effect on exit
  };

  const transformStyle = {
    transform: `${scale.flip ? "scaleX(-1)" : ""} scale(${scale.scale})`,
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-52 rounded-2xl overflow-hidden group transition-all duration-300 bg-gray-300`}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 h-full bg-contain bg-no-repeat group-hover:opacity-0 bg-bottom transition-opacity duration-300"
        style={{ backgroundImage: `url(${assets.mountain})` }}
      ></div>


      {/* Hovered Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-blue opacity-0 transition duration-300 ${isHovered ? "opacity-100" : ""
          }`}
      >
        <div className="absolute top-3 left-5 font-bold z-50 text-white text-base">
          {title.map((line, index) => (
            <span key={index}>
              {line}
              {index < title.length - 1 && <br />}
            </span>
          ))}
        </div>
        <p className="text-white mt-10 z-50 px-5 text-sm">{description}</p>
      </div>

      {/* Default Content */}
      <div
        className={`absolute top-6 left-5 font-bold z-10 transition-opacity duration-300 ${isHovered ? "opacity-0" : "text-lg"
          }`}
      >
        {title.map((line, index) => (
          <span key={index}>
            {line}
            {index < title.length - 1 && <br />}
          </span>
        ))}
      </div>

      <img
        src={imgSrc}
        alt={title.join(" ")}
        style={{ width: imgWidth, height: imgHeight, ...imgPosition, ...transformStyle }}
        className={`absolute object-contain z-10 transition-opacity duration-300 ${isHovered ? "opacity-0" : ""
          }`}
      />
      <div
        className={`absolute inset-0 bg-blue opacity-0 transition duration-300 ${isHovered ? "opacity-50" : ""
          }`}
      ></div>
    </div>
  );
};

export default WhyEOM;

