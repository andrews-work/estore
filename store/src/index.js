// Entry Point

// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import component
import App from './App';
import { CartProvider } from './Pages/Cart/CartContext';

// Add Font Awesome icons to the library
library.add(fas);

// target HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// render app component in React Strict Mode within react-router-dom's browser router
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
