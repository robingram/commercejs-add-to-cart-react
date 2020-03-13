import React from 'react';

const CartProductRow = ({ lineItem }) => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={lineItem.media.source} alt={lineItem.name} height="50" />
      </div>
      <div className="col-md-6 product-detail">
        <h5>{lineItem.name}</h5>
      </div>
      <div className="col-md-2 cart-product-count">
        <h5>{lineItem.quantity}</h5>
      </div>
      <div className="col-md-2 cart-product-price">
        {lineItem.line_total.formatted_with_symbol}
      </div>
    </div>
  );
}

export default CartProductRow;
