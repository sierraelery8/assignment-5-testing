import './App.css';
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Designer Pendant Light",
      price: 199.99,
      image: "https://placehold.co/600x400",
      description: "A statement lighting fixture designed to enhance dining rooms, kitchens, and modern living spaces with elegant style."
    },
    {
      id: 2,
      name: "Brass Floor Mirror",
      price: 279.99,
      image: "https://placehold.co/600x400",
      description: "A full-length brass mirror that adds depth, warmth, and sophistication to any interior."
    },
    {
      id: 3,
      name: "Linen Sofa Throw",
      price: 54.99,
      image: "https://placehold.co/600x400",
      description: "A soft textured linen throw blanket that brings comfort and a refined touch to your sofa or lounge area."
    }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="app">

      <Header
        storeName="Marie Maison Interiors"
        cartCount={cart.length}
      />

      <Hero
        title="Elevated Interiors for Timeless Living"
        subtitle="Discover thoughtfully designed pieces that bring warmth, elegance, and comfort into your home."
        buttonText="Shop Collection"
      />

      <div className="product-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}

      </div>

      <div className="cart-section">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}

            <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
          </>
        )}
      </div>

      <Footer
        storeName="Marie Maison Interiors"
        email="hello@mariemaisoninteriors.com"
        location="Louisville, Kentucky"
      />

    </div>
  );
}

export default App;