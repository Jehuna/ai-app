// Learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect'; // Provides additional matchers for testing DOM elements
import '@testing-library/jest-dom';


// Example global mock for localStorage (uncomment if needed)
/*
global.localStorage = (function() {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();
*/

// Example global mock for fetch API (uncomment if needed)
/*
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);
*/

// Any other global setup can be placed here

