import React from 'react';
import CartProductRow from './CartProductRow';

const CartProductList = ({ cart }) => {
  if (cart && cart.total_unique_items > 0) {
    return (
      <div className="container cart-products">
        {
          cart.line_items.map(line_item => {
            return <CartProductRow key={line_item.id} lineItem={line_item} />
          })
        }
      </div>
    );
  }

  return (
    <div className="container cart-products">
      <p>Your cart is currently empty.</p>
    </div>
  )
}

export default CartProductList;
