import './Footer.css';

function Footer({ storeName, email, location }) {
  return (
    <footer>
      <h3>{storeName}</h3>

      <p>Creating timeless spaces with elegant interior pieces.</p>

      <p>Email: {email}</p>

      <p>Location: {location}</p>
    </footer>
  );
}

export default Footer;