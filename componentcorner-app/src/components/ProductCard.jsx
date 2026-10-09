import './ProductCard.css';
import { Link } from "react-router-dom";


function ProductCard({ product, onAddToCart }) {

  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>


      <h2>
        <Link to={`/product/${product.id}`}>
          {product.name}
        </Link>
      </h2>


      <p className="price">
        ${product.price}
      </p>


      <p>
        {product.description}
      </p>


      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>


    </div>
  );
}


export default ProductCard;