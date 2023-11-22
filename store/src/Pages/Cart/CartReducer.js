// CartReducer.js
import React, { createContext, useReducer, useContext } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

const initialState = {
  items: [],
  total: 0,
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });

        const updatedState = {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };

        console.log('Cart state updated:', updatedState);
        return updatedState;
      } else {
        const updatedState = {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price * action.payload.quantity,
        };

        console.log('Cart state updated again:', updatedState);
        return updatedState;
      }

    case REMOVE_FROM_CART:
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      const updatedState = {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
      console.log('Item removed from cart:', updatedState);
      return updatedState;

    case UPDATE_QUANTITY:
      const updatedItemsQuantity = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });

      const updatedStateQuantity = {
        ...state,
        items: updatedItemsQuantity,
        total: calculateTotal(updatedItemsQuantity),
      };

      console.log('Quantity updated in cart:', updatedStateQuantity);
      return updatedStateQuantity;

    default:
      return state;
  }
};

export { cartReducer, initialState };
