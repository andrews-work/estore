// product display for category
import React from 'react';

// import components
import MiniProduct from './MiniProduct';

const ProductCategory = ({ title, products }) => {
  const productContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80vw',
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="category-page" style={productContainer}>
        {Array.isArray(products) ? (
          products.map((product) => (            <MiniProduct key={product.id} product={product} />
          ))
        ) : (
          <p>No products available for this category</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
