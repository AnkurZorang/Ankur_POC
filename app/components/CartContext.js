'use client';

import { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();


export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product, size) => {
    const itemExists = cartItems.find((item) => item._id === product._id && item.size === size);
    if (itemExists) {

      setCartItems(
        cartItems.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
     
      setCartItems([...cartItems, { ...product, size, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (id, size) => {
    setCartItems(cartItems.filter((item) => !(item._id === id && item.size === size)));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}
