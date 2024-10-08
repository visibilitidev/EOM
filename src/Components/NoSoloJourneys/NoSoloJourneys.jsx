import React from 'react';

const NoSoloJourneys = ({ backgroundImageUrl }) => {
  return (
   <div className="min-h-screen bg-cover bg-center p-8 mb-8 bg-[url('public/palace.png')]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">No more solo journeys</h1>
        <p className="text-xl text-center mb-12">If you're serious about scaling—join the like-minded people to fast-track success.</p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* For Product Founders */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-white mb-6">For Product Founders</h2>
              <ul className="space-y-4">
                {[
                  "Access to 100 Cr founders-only WhatsApp group",
                  "Industry-specific high power network",
                  "Free pass to inperson macro events",
                  "50% Off on 3 private dinner meetups",
                  "Full access to Madrasi Connect AI bot",
                  "Get your story featured on EOM page",
                  "Get more visibility beyond the ecosystem"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 p-4">
              <button className="w-full py-2 text-navy-900 font-bold text-lg">JOIN THE FOUNDERS' CIRCLE</button>
            </div>
          </div>

          {/* For Service Providers */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-white mb-6">For Service Providers</h2>
              <ul className="space-y-4">
                {[
                  "Access to Madrasi Connect AI bot for hiring",
                  "Get a verified profile on the EOM club",
                  "Industry-specific high power network",
                  "50% off on EOM inperson macro editions",
                  "Unlock opportunities for collaboration",
                  "Get your story featured on EOM page",
                  "Get more visibility beyond the ecosystem"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 p-4">
              <button className="w-full py-2 text-navy-900 font-bold text-lg">COMING SOON</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSoloJourneys;