import React from 'react';
import ServiceCard from './ServiceCard';

const mopServices = [
  { id: 1, name: 'Leveling MoP', description: 'Level up in Mists of Pandaria Classic.', priceUSD: 15 },
  { id: 2, name: 'Challenge Modes', description: 'Complete Challenge Modes for achievements and rewards.', priceUSD: 22 },
  { id: 3, name: 'Reputation Grinding', description: 'Increase reputation with MoP factions.', priceUSD: 12 },
];

const MoPServices = ({ currentCurrency }) => {
  const handleSelectService = (service) => {
    alert(`You selected: ${service.name}`);
    // Add to cart or redirect logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">WoW MoP Classic Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mopServices.map(service => (
          <ServiceCard key={service.id} service={service} onSelectService={handleSelectService} currentCurrency={currentCurrency} />
        ))}
      </div>
    </div>
  );
};

export default MoPServices;