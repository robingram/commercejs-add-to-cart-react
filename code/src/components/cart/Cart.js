import React, { useContext } from 'react';
import CartProductList from './CartProductList';
import CartCheckoutRow from './CartCheckoutRow';
import CartTotalRow from './CartTotalRow';
import RecommendedProduct from './RecommendedProduct';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { cart, addProductToCart } = useContext(CartContext);

  if (cart &&  cart.total_unique_items > 0) {
    return (
      <div className="container cart">
        <CartProductList cart={cart} />
        <CartTotalRow cart={cart} />
        <RecommendedProduct cart={cart} addProductToCart={addProductToCart} />
        <CartCheckoutRow />
      </div>
    );
  }

  return (
    <div className="container cart">
      <p>Your cart is currently empty.</p>
    </div>
  )
}

export default Cart;
