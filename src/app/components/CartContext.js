'use client'; // Asegúrate de que el código se ejecute en el cliente

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <CartContext.Provider value={{ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
