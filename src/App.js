import React from "react";
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
  return (
    <Router>
      <div className="container">
        <header>
          <hgroup>
            <h1>25th Stowmarket Brownies</h1>
          </hgroup>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Join Us
                </NavLink>
              </li>
              <li>
                <Link to="#">Activities</Link>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contact
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
