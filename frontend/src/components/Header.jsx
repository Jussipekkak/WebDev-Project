import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyle = {
    width: "100%",
    zIndex: 50,
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "10px 0",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3B82F6",
  };

  const menuItems = [
    { name: "Etusivu", to: "etusivu" },
    { name: "Esittely", to: "yrittaja" },
    { name: "Hinnasto", to: "hinnasto" },
    { name: "Kalenteri", to: "kalenteri" },
    { name: "Ota Yhteyttä", to: "yhteys" },
  ];

  return (
    <header style={headerStyle}>
      <nav className="container">
        <div style={logoStyle}>Yrittäjän Palvelut</div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <div className={`menu ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="menu-item"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
