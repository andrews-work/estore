// Routes

// Import libraries
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

//import page components
import Home from './Pages/Home/HomePage';
import Pants from './Pages/Pants/PantsPage';
import Shirts from './Pages/Shirts/ShirtsPage';
import Hats from './Pages/Hats/HatsPage';
import Shoes from './Pages/Shoes/ShoesPage';
import Product from './Products/Product';
import Cart from './Pages/Cart/Cart';

// component - the router
function App() {
  
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
  );
}

//export component into index.js
export default App;