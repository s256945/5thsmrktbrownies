import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { to: "/", label: "🏠 Home" },
    { to: "/join", label: "🤝 Join Us" },
    { to: "/parents", label: "👪 Parents" },
    { to: "/programme", label: "🎉 Programme" },
    { to: "/resources", label: "🗂️ Resources" },
    { to: "/contact", label: "📬 Contact" },
  ];

  return (
    <header>
      <hgroup>
        <h1>5th Stowmarket Brownies</h1>
      </hgroup>
      <nav>
        <ul className={menuOpen ? "show" : ""}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to} onClick={toggleMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
