import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { mynewtheme } from '../src/theme/theme'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider resetCSS theme={mynewtheme}>
      <App />
    </ChakraProvider>
);


reportWebVitals();
