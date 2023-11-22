import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useCart } from '../Pages/Cart/CartContext';
import Header from '../Pages/General/Header';
import Navmenu from '../Pages/General/Nav/Nav';
import Footer from '../Pages/General/Footer';

function Product() {
  const { productId } = useParams();
  const { addToCart } = useCart(); 
  const [productData, setProductData] = useState(null);
  

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${productId}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    const { id = '', title = '', price = 0 } = productData || {};
    addToCart({
      id,
      name: title,
      price,
      quantity: 1,
    });
    console.log('item added to cart');
  };  
  

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Navmenu />
      <div className="individual-product-page">
        {productData && (
          <div className="product-details">
            <img src={productData.image_url} alt={productData.title} />
            <h2>{productData.title}</h2>
            <p>{productData.description}</p>
            <p>${productData.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Product;
