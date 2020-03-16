import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/Commerce';

const RecommendedProduct = ({ cart }) => {
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
