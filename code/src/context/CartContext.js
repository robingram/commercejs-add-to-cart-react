import React from 'react';

const CartContext = React.createContext({
  cart: {},
  setCart: () => {}
});
export default CartContext;
