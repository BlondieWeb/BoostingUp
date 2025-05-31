import React from 'react';
import ServiceCard from './ServiceCard';

const retailServices = [
  { id: 1, name: 'Mythic+ Dungeons', description: 'Complete high-level Mythic+ dungeons.', priceUSD: 25 },
  { id: 2, name: 'Raid Boosting', description: 'Get gear and achievements from the latest raids.', priceUSD: 50 },
  { id: 3, name: 'Arena Rating', description: 'Increase your PvP arena rating.', priceUSD: 30 },
  { id: 4, name: 'Leveling', description: 'Level up your character quickly.', priceUSD: 15 },
];

const RetailServices = ({ currentCurrency }) => {
  const handleSelectService = (service) => {
    alert(`You selected: ${service.name}`);
    // Add to cart or redirect logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">WoW Retail Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {retailServices.map(service => (
          <ServiceCard key={service.id} service={service} onSelectService={handleSelectService} currentCurrency={currentCurrency} />
        ))}
      </div>
    </div>
  );
};

export default RetailServices;