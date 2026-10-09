import { useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {

  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );


  if (!product) {
    return (
      <main>
        <h2>Product Not Found</h2>
      </main>
    );
  }


  return (
    <main className="product-details">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h1>{product.name}</h1>

      <p>
        {product.description}
      </p>

      <h2>
        ${product.price}
      </h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </main>
  );
}


export default ProductDetailsPage;