import React from 'react';

const CartContext = React.createContext({
  cart: {},
  setCart: () => {},
  addProductToCart: () => {},
});
export default CartContext;
