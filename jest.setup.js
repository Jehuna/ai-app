// jest.setup.js

// Importing additional expect matchers
import '@testing-library/jest-dom/extend-expect';

// Configuring Enzyme with Adapter (if using Enzyme with React 16 or newer)
// Note: This part is optional and only necessary if you use Enzyme for testing.
// If you're using React 17 or newer, you'll need the appropriate adapter.
/*
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // or the appropriate adapter for your React version
Enzyme.configure({ adapter: new Adapter() });
*/

// Global Mocks
// Example: Mocking a localStorage implementation
// const localStorageMock = (function() {
//     let store = {};
//     return {
//         getItem: function(key) {
//             return store[key] || null;
//         },
//         setItem: function(key, value) {
//             store[key] = value.toString();
//         },
//         clear: function() {
//             store = {};
//         },
//         removeItem: function(key) {
//             delete store[key];
//         },
//     };
// })();

// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// // Example: Mocking fetch API
// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve({}),
// }));

// Any other global setup can be placed here

