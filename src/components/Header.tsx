import { Link } from "react-router-dom";
import Logo from "../assets/t-shirt.png";
import "./header.css";

export default function Header() {


 
  return (
    <header className="header">
      <article>
        <img src={Logo} alt="logo" />
        <h1>Vintage Clothes</h1>
      </article>

      <article>
        <input type="text" placeholder="Search here" />
      </article>

      <article>
        <nav className="header-nav">
          <Link to="/products">Products</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/register">Register</Link>
        </nav>
      </article>

    </header>
  );
}
