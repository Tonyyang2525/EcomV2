import { Link } from "react-router-dom";
import "./css/nav.css";
function Nav() {
  return (
    <header className="App-header">
      <img
        src="./img/logo.png"
        alt="Logo"
        className="logo"
        // style={{ background: "white", height: "50px", width: "50px" }}
      />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
