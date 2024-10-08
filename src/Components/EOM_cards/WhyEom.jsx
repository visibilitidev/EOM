import React from "react";

const WhyEOM = () => {
  return (
    <>
      <div className="max-w-full flex flex-col justify-center mt-32 bg-[url('public/palace.png')] bg-cover bg-center py-12">
        <h1 className="font-Montserrat font-bold text-3xl text-center my-1">
          Why is EOM one of a kind?
        </h1>
        <h5 className="font-OpenSans text-lg font-normal text-center my-2">
          This isn’t just another networking group. Here’s what sets us apart:
        </h5>

        <div className="w-5/6 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-8">
          {/* Card 1 */}
          <Card 
            title={["Candid", "Conversations"]} 
            imgSrc="Cardimg/img1.png" 
            backgroundImage="public/mountain.png"
            imgWidth="215px"
            imgHeight="210px"
            description="Engage in open dialogues that foster genuine connections."
          />
          
          {/* Card 2 */}
          <Card 
            title={["Founder-to-", "Founder Support"]} 
            imgSrc="Cardimg/img2.png" 
            backgroundImage="public/mountain.png"
            imgWidth="215px"
            imgHeight="210px"
            description="Receive mentorship and guidance from fellow founders."
          />
          
          {/* Card 3 */}
          <Card 
            title={["Curated", "Knowledge"]} 
            imgSrc="Cardimg/img3.png" 
            backgroundImage="public/mountain.png"
            imgWidth="200px"
            imgHeight="220px"
            description="Access exclusive resources tailored to your growth."
          />
          
          {/* Card 4 */}
          <Card 
            title={["Closed-Door", "Events"]} 
            imgSrc="Cardimg/img4.png" 
            backgroundImage="public/mountain.png"
            imgWidth="145px"
            imgHeight="205px"
            description="Participate in private events designed for deep insights."
          />
          
          {/* Card 5 */}
          <Card 
            title={["Focus on", "Scaling"]} 
            imgSrc="Cardimg/img5.png" 
            backgroundImage="public/mountain.png"
            imgWidth="200px"
            imgHeight="215px"
            description="Learn strategies to elevate your business to the next level."
          />
          
          {/* Card 6 */}
          <Card 
            title={["Masterclass", "Sessions"]} 
            imgSrc="Cardimg/img6.png" 
            backgroundImage="public/mountain.png"
            imgWidth="210px"
            imgHeight="230px"
            description="Join expert-led sessions to sharpen your skills."
          />
        </div>
      </div>
    </>
  );
};

const Card = ({ title, imgSrc, backgroundImage, imgWidth, imgHeight, description }) => (
  <div className={`relative w-full h-48 rounded-2xl overflow-visible group bg-gray-300 transition-all duration-300 group-hover:rounded-none`}>
    <div className={`absolute inset-0 flex flex-col justify-center items-center bg-blue opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl `}>
      <p className={`text-white text-center font-medium z-50 px-5`}>{description}</p>
    </div>
    <div className={`absolute top-6 left-5 font-medium z-10 group-hover:opacity-0`}>
      {title.map((line, index) => (
        <span key={index}>
          {line}
          {index < title.length - 1 && <br />} 
        </span>
      ))}
    </div>
   
    <img src={imgSrc} alt={title.join(" ")} style={{ width: imgWidth, height: imgHeight }} className={`absolute right-0 bottom-0 object-contain z-10 transition-opacity duration-300 group-hover:opacity-0`} />
    
    
    <div className={`absolute inset-0 h-full bg-[url('${backgroundImage}')] bg-contain bg-no-repeat bg-bottom group-hover:opacity-0`}></div>

    <div className={`absolute inset-0 bg-blue opacity-0 group-hover:opacity-50 transition duration-300`}></div>
  </div>
);

export default WhyEOM;