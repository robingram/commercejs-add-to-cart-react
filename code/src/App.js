import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import CartContext from './context/CartContext';
import { commerce } from './lib/Commerce';

function App() {
  const [cart, setCart] = useState();

  const addProductToCart = (productId) => {
    commerce.cart.add(productId, 1)
      .then(result => {
        setCart(result.cart);
        alert("Product added to cart");
      });
  }

  useEffect(() => {
    commerce.cart.retrieve()
      .then(cart => {
        setCart(cart);
      })
  }, [])

  return (
    <div className="container">
      <CartContext.Provider value={{cart, setCart, addProductToCart}}>
        <Nav />
        <div className="container">
          <h2>Products</h2>
        </div>
        <ProductList />
      </CartContext.Provider>
    </div>
  );
}

export default App;
