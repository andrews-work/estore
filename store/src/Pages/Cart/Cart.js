// Cart.js
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCart } from './CartContext';
import Header from '../General/Header';
import Navmenu from '../General/Nav/Nav';
import Footer from '../General/Footer';

const Cart = () => {
  const { cartState, addToCart, removeItemFromCart, getTotalCost, updateQuantity } = useCart();
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const loadStripe = async () => {
      const stripeModule = await import('@stripe/stripe-js');
      const stripeKey = 'pk_test_51Njz4gHHfk1ycPcQ9QkgROCdN5MuwLZK3UQJO0mslCgBVyLVc1udf7x9zM4LUAK38kIPNvjlrOyQVjK93oKVzr1P00v7Z1Xmiw';
      const stripeInstance = await stripeModule.loadStripe(stripeKey);
      setStripe(stripeInstance);
    };

    loadStripe();
  }, []);

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const removeItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleInputChange = (itemId, value) => {
    const newQuantity = parseInt(value, 10) || 1;
    updateQuantity(itemId, newQuantity);
  };

  const handleInputKeyDown = (e, itemId) => {
    if (e.key === 'Backspace') {
      // Prevent default behavior of backspace key
      e.preventDefault();
      updateQuantity(itemId, 0);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      // Prevent default behavior of arrow keys
      e.preventDefault();

      // Increment or decrement by 1 based on arrow key
      const direction = e.key === 'ArrowUp' ? 1 : -1;
      updateQuantity(itemId, cartState.items.find(item => item.id === itemId).quantity + direction);
    }
  };

  const checkout = async () => {
  try {
  const response = await fetch('http://localhost:4000/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: cartState.items }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  // Handle the data
} catch (error) {
  console.error('Error during fetch:', error);
}
  };

  return (
    <div>
      <Header />
      <Navmenu />
      <h2>Your Cart</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cartState.items.map((item) => (
          <div key={item.id} style={{ border: '1px solid blue', padding: '10px', marginBottom: '10px', flex: '1', maxWidth: '300px' }}>
            <p>{item.name}</p>
            <Form.Group>
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                onKeyDown={(e) => handleInputKeyDown(e, item.id)}
              />
            </Form.Group>
            <p>Price per item: ${item.price}</p>
            <p>Total for this item: ${calculateItemTotal(item)}</p>
            <Button variant="danger" onClick={() => removeItem(item.id)}>
              Remove item
            </Button>
          </div>
        ))}
      </div>
      <p>Total Price for all items: ${getTotalCost()}</p>
      <Button variant="success" onClick={checkout}>
        Purchase items
      </Button>
      <Footer />
    </div>
  );
};

export default Cart;
