let cachedRate = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export const fetchExchangeRate = async () => {
  const now = Date.now();
  if (cachedRate && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedRate;
  }
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
    const data = await response.json();
    cachedRate = data.rates.EUR;
    lastFetchTime = now;
    return cachedRate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    // fallback to a default rate if fetch fails
    return 0.92;
  }
};

export const formatCurrency = (amount, currency) => {
  if (currency === 'EUR') {
    if (cachedRate) {
      return `€${(amount * cachedRate).toFixed(2)}`;
    } else {
      // If rate not available, show amount in USD with a note
      return `$${amount.toFixed(2)} (rate unavailable)`;
    }
  }
  // Default to USD
  return `$${amount.toFixed(2)}`;
};
