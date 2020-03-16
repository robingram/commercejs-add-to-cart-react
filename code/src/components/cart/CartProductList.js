import React from 'react';
import CartProductRow from './CartProductRow';

const CartProductList = ({ cart }) => {
  return (
    cart.line_items.map(line_item => {
      return <CartProductRow key={line_item.id} lineItem={line_item} />
    })
  );
}

export default CartProductList;
