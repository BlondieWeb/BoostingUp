import { formatCurrency } from '../utils/currencyFormatter';

const ServiceCard = ({ service, onSelectService, currentCurrency }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300 border border-purple-700">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-3">{service.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        <div className="text-lg font-bold text-white mb-4">{formatCurrency(service.priceUSD, currentCurrency)}</div>
        <button
          onClick={() => onSelectService(service)}
          className="w-full bg-orange-600 text-gray-900 py-2 rounded-lg hover:bg-orange-500 transition-colors font-semibold"
        >
          Get This Boost!
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;