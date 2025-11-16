import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/t-shirt.png";
import "./header.css";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <article>
        <img src={Logo} alt="logo" />
        <h1>Vintage Clothes</h1>
      </article>

      <article>
        <nav className="header-nav">

          <Link to="/products">Products</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/contacts">Contacts</Link>

          {user ? (
            <>
              <Link to="/favorites">Favorites</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
              <span className="username">Hi, {user.name}</span>

            </>
          ) : (
            <Link to="/login">Login</Link>
          )}

        </nav>
      </article>
    </header>
  );
}
