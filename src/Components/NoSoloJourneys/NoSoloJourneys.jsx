import React from 'react';
import { assets } from '../../assets/assets';


const NoSoloJourneys = ({ backgroundImageUrl }) => {
  return (
    <div 
  className="min-h-screen bg-contain bg-center p-8 pt-0 mb-8" 
  style={{ backgroundImage: `url(${assets.palace})` }}
>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">No more solo journeys</h1>
        <p className="text-xl text-center mb-12">If you're serious about scaling—join the like-minded people to fast-track success.</p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto">
          {/* For Product Founders */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-white mb-6 font-Inter">For Product Founders</h2>
              <ul className="space-y-4 font-OpenSans">
                {[
                  "Access to 100 Cr founders-only WhatsApp group",
                  "Industry-specific high power network",
                  "Free pass to in-person macro events",
                  "50% Off on 3 private dinner meetups",
                  "Full access to Madrasi Connect AI bot",
                  "Get your story featured on EOM page",
                  "Get more visibility beyond the ecosystem"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-yellow-400 text-3xl font-extrabold mr-2 leading-none">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 px-4">
              <button className="w-full py-2 text-navy-900 font-extrabold text-lg">JOIN THE FOUNDERS' CIRCLE</button>
            </div>
          </div>

          {/* For Service Providers */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-white mb-6 font-Inter">For Service Providers</h2>
              <ul className="space-y-4 font-OpenSans">
                {[
                  "Access to Madrasi Connect AI bot for hiring",
                  "Get a verified profile on the EOM club",
                  "Industry-specific high power network",
                  "50% off on EOM in-person macro editions",
                  "Unlock opportunities for collaboration",
                  "Get your story featured on EOM page",
                  "Get more visibility beyond the ecosystem"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-yellow-400 text-3xl font-extrabold mr-2 leading-none">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 px-4">
              <button className="w-full py-2 text-navy-900 font-extrabold text-lg">COMING SOON</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSoloJourneys;