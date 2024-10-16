import React, { useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';

const investors = [
  {  image: assets.png1 },
  {  image: assets.png2 },
  {  image: assets.png3 },
  {  image: assets.png4 },
  {  image: assets.png5 },
  {  image: assets.png6 },
  {  image: assets.png7 },
  {  image: assets.png8 },
];

const InvestorCard = ({ investor }) => (
  <div className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden m-2 relative mt-10">
    <img src={investor.image} alt={investor.name} className="w-full h-full object-cover" />
    {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
    <div className="absolute top-4 left-4 right-4">
      <h3 className="font-bold text-lg text-white">{investor.company}</h3>
      <p className="text-sm bg-white rounded px-2 py-1 inline-block mt-2">{investor.tag}</p>
      {investor.secondTag && (
        <p className="text-sm bg-blue-600 text-white rounded px-2 py-1 inline-block mt-2 ml-2">{investor.secondTag}</p>
      )}
    </div>
    <p className="absolute bottom-4 left-4 text-white font-semibold">{investor.name}</p> */}
  </div>
);

const PoweredByBestComponent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstChild;
      let scrollAmount = 0;
      const step = () => {
        scrollAmount += 0.5;
        if (scrollAmount >= scrollContent.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, []);

  return (
    <div className="w-[100%] px-4 font-sans mt-20">
      <h2 className="text-3xl font-bold text-center mb-2">Powered By The Best</h2>
      <p className="text-center mb-8">EOM is supported by the top founders & angel investors in the ecosystem</p>
      
      <div ref={scrollRef} className="overflow-hidden">
        <div className="flex whitespace-nowrap">
          {[...investors, ...investors].map((investor, index) => (
            <InvestorCard key={index} investor={investor} />
          ))}
        </div>
      </div>
      
      <p className="text-center mt-4 text-gray-600">and many more.</p>
    </div>
  );
};

export default PoweredByBestComponent;