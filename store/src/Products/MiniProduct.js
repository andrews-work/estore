
// import libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MiniProduct({ product }) {

  // product data
  const [productData, setProductData] = useState(product);

  // component style
  const display = {
    border: 'blue solid 1px',
    margin: '2vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  // render component
  return (
    <div className="product-card" >
      {productData && (
        <div style={display}>
          <Link to={`/products/${productData.id}`}>
            <button className="btn btn-light">
              <img src={productData.image} alt={productData.title} style={{ height: '25vh', width: '10vw' }} />
              <h1 className="h4">{productData.brand}</h1>
              <h2 className="h5">{productData.title}</h2>
              <p className="small">${productData.price}</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

// export component
export default MiniProduct;
