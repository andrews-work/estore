// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';
import { cartReducer, initialState } from './CartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    console.log('Current Cart State:', cartState);
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: itemId,
        quantity: newQuantity,
      },
    });
  };

  const getTotalCost = () => {
    const totalCost = cartState.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalCost.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeItemFromCart,
        updateQuantity,
        getTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, CartContext, useCart };
