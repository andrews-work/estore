// ProductSorter.jsx
import React, { useState } from 'react';

const ProductSorter = ({ onSort }) => {
  const [selectedSort, setSelectedSort] = useState('price-high-to-low');

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSort(selectedOption);
    onSort(selectedOption);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={selectedSort} onChange={handleSortChange}>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="color">Color</option>
        {/* Add more sorting options as needed */}
      </select>
    </div>
  );
};

export default ProductSorter;
