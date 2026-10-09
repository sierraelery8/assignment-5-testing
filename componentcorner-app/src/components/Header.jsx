import './Header.css';
import { Link } from "react-router-dom";


function Header({ storeName, cartCount }) {

  return (
    <header>

      <h1>{storeName}</h1>


      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/cart">
              Cart
            </Link>
          </li>

        </ul>
      </nav>


      <div className="cart-container">

        <Link to="/cart">
          <span className="cart-icon">🛒</span>
        </Link>

        <span className="cart-count">
          {cartCount}
        </span>

      </div>


    </header>
  );
}


export default Header;