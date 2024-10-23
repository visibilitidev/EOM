import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Dot } from 'lucide-react';

const MembershipPlans = () => {
  const navigate = useNavigate();
  return (
    <div
      id='membership-plans'
      className="min-h-screen bg-contain bg-center p-8 pt-0 mb-8 mt-16 sm:mb-48 bg-no-repeat"
      style={{ backgroundImage: `url(${assets.palace}) ` }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-3xl font-bold text-center mb-4">Membership Plans</h1>
        <p className="text-base text-center mb-12">Learn, network, grow & scale - unlatch bigger milestones with us.</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mx-auto" style={{ alignItems: 'center' }}>
          {/* For Product Founders */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full min-h-full">
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-white mb-6 font-Inter">For Product Founders</h2>
              <div className="mb-4">
                <span className="line-through text-white text-xl">₹45999/Yr</span>
                <span className="text-3xl font-bold text-yellow-400 ml-2">₹15999/Yr</span>
              </div>
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
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-yellow-400 text-3xl font-extrabold leading-none"><Dot strokeWidth={8} /></span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 px-4 hover:bg-yellow-500">
              <button className="w-full py-2 text-navy-900 font-extrabold text-lg transition-transform transform 
               hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1"    onClick={() => window.location.href = 'https://nas.io/entrepreneurs-of-madras-application'}>APPLY NOW</button>
            </div>
          </div>

          {/* For Service Providers */}
          <div className="bg-[#F0F0F0] rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full min-h-full relative items-stretch">
            <div className="px-6 py-7  flex-grow">
              <h2 className="text-3xl font-bold text-black mb-6 font-Inter">For Service Providers</h2>
              <h2 className='text-[#F0F0F0]'>.</h2>
              <h2 className='text-[#F0F0F0]'>.</h2>
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
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-black text-3xl font-extrabold leading-none">
                      <Dot strokeWidth={8} />
                    </span>
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
            <div className="absolute bottom-5">
              <img src={assets.group147} alt='' />
            </div>
            <div className="bg-yellow-400 px-4 hover:bg-yellow-500">
              <button className="w-full py-2 text-navy-900 font-extrabold text-lg transition-transform transform 
               hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1">COMING SOON</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;