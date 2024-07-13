import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.title === product.title);

    if (productInCart) {
      setCart(
        cart.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.title !== productToRemove.title));
  };

  const updateQuantity = (product, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.title === product.title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, '')) : item.price;
      return total + (price * item.quantity || 0);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
