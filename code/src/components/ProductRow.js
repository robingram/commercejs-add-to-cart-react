import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ProductRow = ({ product, addProduct }) => {
  const handleAddProduct = e => {
    e.preventDefault();
    addProduct(product.id);
  }

  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={product.media.source} alt={product.name} height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>{product.name}</h4>
        <div dangerouslySetInnerHTML={{__html: product.description}}></div>
      </div>
      <div className="col-md-2 product-price">
        <p>{product.price.formatted_with_symbol}</p>
        <Button color="success" onClick={handleAddProduct}>
          <FontAwesomeIcon icon={faPlus} />
          <span className="icon-button-text-right">Add to cart</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductRow;
