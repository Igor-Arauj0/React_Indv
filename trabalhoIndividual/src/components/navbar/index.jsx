import { Link } from "react-router-dom";
import BrBaLogo from "../../img/breaking-bad.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./styles.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleDropdown}>
        <FaBars />
      </div>
      <ul className={`navbar-pages ${showDropdown ? "show" : ""}`}>
        <li>
          <Link to="/" className="itens">
            <img
              src={BrBaLogo}
              alt="Logo da franquia BreakingBad"
              className="logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/enredo" className="itens">
            Enredo
          </Link>
        </li>
        <li>
          <Link to="/personagens" className="itens">
            Personagens
          </Link>
        </li>
        <li>
          <Link to="/criador" className="itens">
            Sobre o criador
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
