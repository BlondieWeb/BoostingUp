import React, { useState } from 'react';
import { formatCurrency } from '../utils/currencyFormatter';

const LayoutHeader = ({ setCurrentPage, currentCurrency, setCurrency }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl font-extrabold text-orange-500 mr-4">Boostee.gg</div>
          <div className="hidden md:block text-sm italic text-gray-300">Dominate Your Game</div>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <button onClick={() => setCurrentPage('retail')} className="hover:text-orange-500 transition-colors">
            WoW Retail
          </button>
          <button onClick={() => setCurrentPage('classic')} className="hover:text-orange-500 transition-colors">
            WoW Classic
          </button>
          <button onClick={() => setCurrentPage('mop')} className="hover:text-orange-500 transition-colors">
            WoW MoP
          </button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-orange-500 transition-colors">
            Contact
          </button>
          <div className="relative">
            <button onClick={toggleCurrencyDropdown} className="flex items-center hover:text-orange-500 transition-colors">
              {currentCurrency}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <button onClick={() => handleCurrencyChange('USD')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  USD
                </button>
                <button onClick={() => handleCurrencyChange('EUR')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  EUR
                </button>
              </div>
            )}
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <div className="relative mr-4">
            <button onClick={toggleCurrencyDropdown} className="flex items-center text-white focus:outline-none">
              {currentCurrency}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <button onClick={() => handleCurrencyChange('USD')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  USD
                </button>
                <button onClick={() => handleCurrencyChange('EUR')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  EUR
                </button>
              </div>
            )}
          </div>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <button onClick={() => { setCurrentPage('retail'); toggleMenu(); }} className="block w-full text-left text-white hover:text-orange-500 transition-colors">
            WoW Retail
          </button>
          <button onClick={() => { setCurrentPage('classic'); toggleMenu(); }} className="block w-full text-left text-white hover:text-orange-500 transition-colors">
            WoW Classic
          </button>
          <button onClick={() => { setCurrentPage('mop'); toggleMenu(); }} className="block w-full text-left text-white hover:text-orange-500 transition-colors">
            WoW MoP
          </button>
          <button onClick={() => { setCurrentPage('contact'); toggleMenu(); }} className="block w-full text-left text-white hover:text-orange-500 transition-colors">
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;