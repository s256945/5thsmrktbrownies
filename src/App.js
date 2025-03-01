import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Join from "./components/joinUs.jsx";
import Parents from "./components/parents.jsx";
import Contact from "./components/contact.jsx";
import Resources from "./components/resources.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Programme from "./components/programme.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
