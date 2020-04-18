import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { commerce } from '../../lib/Commerce';

const RecommendedProduct = ({ cart, addProductToCart }) => {
  const [recommendedProduct, setRecommendedProduct] = useState(false);

  const cartProductIds = cart.line_items.map(line_item => line_item.product_id);

  useEffect(() => {
    commerce.products.list().then((result) => {
      result.data.some((product) => {
        if (!cartProductIds.includes(product.id)) {
          setRecommendedProduct(product);
          return true;
        }
      });
    });
  }, [])

  if (recommendedProduct) {
    const handleAddProduct = e => {
      e.preventDefault();
      addProductToCart(recommendedProduct.id);
      setRecommendedProduct(null)
    }

    return (
      <>
        <div class="row">
          <div class="col-md-12">
            <i>You may also like:</i>
          </div>
        </div>
        <div className="row product">
          <div className="col-md-2">
            <img src={recommendedProduct.media.source} alt={recommendedProduct.name} height="50" />
          </div>
          <div className="col-md-8 product-detail">
            <h5>{recommendedProduct.name}</h5>
          </div>
          <div className="col-md-2 cart-product-price">
            {recommendedProduct.price.formatted_with_symbol}
            <Button color="success" onClick={handleAddProduct} size="sm">
              Add
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
    </>
  );
}

export default RecommendedProduct;
