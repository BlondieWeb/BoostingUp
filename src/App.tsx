import React, { useState, useEffect } from 'react';
import ClassicServices from './components/ClassicServices';
import { fetchExchangeRate } from './utils/currencyFormatter';

const App: React.FC = () => {
  const [currentCurrency, setCurrentCurrency] = useState<'USD' | 'EUR'>('USD');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const getRate = async () => {
      const rate = await fetchExchangeRate();
      setExchangeRate(rate);
    };
    getRate();
  }, []);

  const toggleCurrency = () => {
    setCurrentCurrency(prevCurrency => (prevCurrency === 'USD' ? 'EUR' : 'USD'));
  };

  return (
    <div className="app-container">
      <button
        onClick={toggleCurrency}
        className="m-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
      >
        Switch to {currentCurrency === 'USD' ? 'EUR' : 'USD'}
      </button>

      {/* Render components in desired order */}
      <ClassicServices currentCurrency={currentCurrency} exchangeRate={exchangeRate} />
      {/* Add other components here and pass currentCurrency as needed */}
    </div>
  );
};

export default App;
