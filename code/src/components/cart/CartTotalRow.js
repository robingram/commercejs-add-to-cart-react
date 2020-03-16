import React from 'react';

const CartTotalRow = ({ cart }) => {
  return (
    <div className="row">
      <div className="col-md-12 text-right">
        Total: {cart.subtotal.formatted_with_symbol}
      </div>
    </div>
  );
}

export default CartTotalRow;
