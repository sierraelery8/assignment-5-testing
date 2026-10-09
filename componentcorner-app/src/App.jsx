import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';


function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const products = [
    {
      id: 1,
      name: "Designer Pendant Light",
      price: 199.99,
      image: "https://placehold.co/600x400",
      description:
        "A statement lighting fixture designed to enhance dining rooms, kitchens, and modern living spaces with elegant style."
    },
    {
      id: 2,
      name: "Brass Floor Mirror",
      price: 279.99,
      image: "https://placehold.co/600x400",
      description:
        "A full-length brass mirror that adds depth, warmth, and sophistication to any interior."
    },
    {
      id: 3,
      name: "Linen Sofa Throw",
      price: 54.99,
      image: "https://placehold.co/600x400",
      description:
        "A soft textured linen throw blanket that brings comfort and a refined touch to your sofa or lounge area."
    }
  ];


  function addToCart(product) {
    setCart([...cart, product]);
  }


  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }


  return (
    <BrowserRouter>

      <div className="app">

        <Header
          storeName="Marie Maison Interiors"
          cartCount={cart.length}
        />


        <Routes>

          <Route
            path="/"
            element={
              <HomePage />
            }
          />


          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />


          <Route
            path="/product/:id"
            element={
              <ProductDetailsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />


          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />

        </Routes>


        <Footer
          storeName="Marie Maison Interiors"
          email="hello@mariemaisoninteriors.com"
          location="Louisville, Kentucky"
        />

      </div>

    </BrowserRouter>
  );
}


export default App;