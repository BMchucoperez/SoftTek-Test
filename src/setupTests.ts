import '@testing-library/jest-dom';

// Polyfills para el entorno de testing
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;