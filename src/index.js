import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { ChakraProvider, theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <GlobalStyle/>
    <App />
    </ChakraProvider>
    
  </React.StrictMode>
);


