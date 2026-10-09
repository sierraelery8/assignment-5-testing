import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main>
      <div className="product-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}

      </div>
    </main>
  );
}

export default ProductsPage;