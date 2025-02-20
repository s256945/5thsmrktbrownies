import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./components/home.jsx";
import Join from "./components/joinUs.jsx";
import Contact from "./components/contact.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="container">
        <header>
          <hgroup>
            <h1>25th Stowmarket Brownies</h1>
          </hgroup>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav>
            <ul className={menuOpen ? "show" : ""}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  🏠 Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  🤝 Join Us
                </NavLink>
              </li>
              <li>
                <Link to="#" onClick={toggleMenu}>
                  🎉 Activities
                </Link>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  📬 Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
