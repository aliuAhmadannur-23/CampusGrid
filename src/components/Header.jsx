import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <i className="fa-solid fa-seedling"></i>
            </div>

            <div className="logo-text">
              <h2>Evergreen</h2>
              <span>Campus Grid</span>
            </div>
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#pillars">About</a>
            </li>
            <li>
              <Link to="/identity">Take SLS</Link>
            </li>
            <li>
              <a href="#">Communities</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="nav-buttons">
            <a href="#" className="btn login-btn">
              Login
            </a>
            <Link to="/identity" className="btn register-btn">
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
