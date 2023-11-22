// Hats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../General/Header';
import Navmenu from '../General/Nav/Nav';
import Footer from '../General/Footer';
import ProductCategory from '../../Products/ProductCategory';
import ProductSorter from '../../Products/ProductSorter';

function Hats() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products/category/hats')
      .then((response) => {
        console.log('API Response:', response.data);
        setProducts(response.data);
        setSortedProducts(response.data); // Set initial sorted products
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to handle sorting
  const handleSort = (sortOption) => {
    let sorted = [...products];

    if (sortOption === 'price-high-to-low') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'price-low-to-high') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'color') {
      // Implement color sorting logic
      // ...
    }

    setSortedProducts(sorted);
  };

  const containerStyle = {
    display: 'flex',
  };

  const sorterStyle = {
    flex: '20vw',
    padding: '20vh 5vw',
  };

  const categoryStyle = {
    flex: '1', // The remaining space
    padding: '10px', // Add padding for spacing
  };

  return (
    <div>
      <Header />
      <Navmenu />
      <div style={containerStyle}>
        <div style={sorterStyle}>
          <ProductSorter onSort={handleSort} />
        </div>
        <div style={categoryStyle}>
          <ProductCategory products={sortedProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hats;
