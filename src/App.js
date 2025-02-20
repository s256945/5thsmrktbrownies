import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home.jsx";
import Join from "./components/joinUs.jsx";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/join">Join Us</Link>
              </li>
              <li>
                <Link to="#">Activities</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
