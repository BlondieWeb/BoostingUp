import ServiceCard from './ServiceCard.jsx';
import Footer from './Footer.jsx';

const classicServices = [
  { id: 1, name: 'Leveling Classic', description: 'Level up in WoW Classic.', priceUSD: 20 },
  { id: 2, name: 'Gold', description: 'Why bother farming it yourself when we can give you as much as you want?', priceUSD: 10 },
  { id: 3, name: 'Raid Attunements', description: 'Complete raid access quests.', priceUSD: 18 },
  { id: 4, name: 'Honor Farming', description: 'Efficiently farm Honor points for PvP gear.', priceUSD: 15 },
  { id: 5, name: 'Hourly Driving', description: 'Hire a professional player to play your character for an hour.', priceUSD: 8 },
  { id: 6, name: 'Rank Boost', description: 'Increase your PvP rank quickly and safely.', priceUSD: 40 },
];

const ClassicServices = ({ currentCurrency, exchangeRate }) => {
  const handleSelectService = (service) => {
    alert(`You selected: ${service.name}`);
    // Add to cart or redirect logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">WoW Classic Services</h2>
      <div className="classic-services-container">
        {classicServices.map(service => (
          <div key={service.id} className="classic-service-card">
            <ServiceCard
              service={service}
              onSelectService={handleSelectService}
              currentCurrency={currentCurrency}
              exchangeRate={exchangeRate}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ClassicServices;
