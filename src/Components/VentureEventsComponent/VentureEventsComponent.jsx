import React from 'react';

const partners = [
  { name: 'Peaceful Progress', logo: '/logo1.png' },
  { name: 'V3 Ventures', logo: '/logo2.png' },
  { name: '100x VC', logo: '/logo3.png' }
];

const features = [
  {
    title: 'Macro Networking Events',
    description: 'A lot happens over our offline event. From finding a right partner to resources, connect with a broad network of like-minded entrepreneurs & professionals'
  },
  {
    title: 'Private Dinner Meetups',
    description: 'Intimate gatherings with unique settings for high-level discussions that can lead to valuable partnerships & collaborations.'
  },
  {
    title: 'Closed-Club Investor Meetups',
    description: '1:1 Private forum that allows selected entrepreneurs & investors to discuss potential opportunities in a focused environment.'
  },
  {
    title: 'Masterclass',
    description: 'Dive deep into essential business topics in virtual sessions led by industry veterans that you must learn sooner than later in business.'
  },
  {
    title: 'Community Getaways',
    description: "We believe great journeys weren't built in the boardrooms but in an environment with a fresh perspective and renewed energy."
  },
  {
    title: 'Pitching & Fundraising',
    description: 'Work with experts to refine your pitch & present it to a panel of top investors, increasing your chances of securing the funding.'
  }
];

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md flex flex-col justify-between ${className}`}>
    {children}
  </div>
);

const VenturePartnersComponent = () => {
  return (
    <div className="container mx-auto p-4 mt-16">
      {/* Partners Section */}
      <div className="relative w-full mx-auto">
        {/* Background Image with reduced opacity */}
        <div className="absolute inset-0 bg-[url('/palace.png')] bg-cover bg-center opacity-45 pointer-events-none"></div>

        {/* Content on top of the background */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-[90%] md:w-3/4 mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="p-4 border-2 border-yellow-400 h-44 md:h-52 relative z-10">
              <img src={partner.logo} alt={`${partner.name} logo`} className="w-24 h-full object-contain " />
              <h3 className="text-2xl font-semibold  font-Montserrat text-black -mt-6 mb-4">{partner.name}</h3>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] md:w-3/4 mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="p-4 bg-gray-100 h-44 md:h-60">
            <h3 className="text-lg font-bold w-2/3">{feature.title}</h3>
            <p className="text-base mb-6">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VenturePartnersComponent;
