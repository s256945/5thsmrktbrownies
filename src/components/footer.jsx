import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <img src={Logo} alt="Logo" width="100" height="auto" />
        </div>
        <p>&copy; 2025 Created by Amy Jordan.</p>
      </div>
    </footer>
  );
};

export default Footer;
