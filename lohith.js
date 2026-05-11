import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Smart Agriculture 🌾</h2>;
}

function Crops() 



{
  return <h2>Crop Details: Rice, Wheat, Maize 🌽</h2>;
}

function Contact() {
  return <h2>Contact: support@agriapp.com</h2>;
}

function App() {
  return (
    <Router>
      <header style= {{background:"green", padding:"15px", color:"white"}}>
        <h1>Smart Agriculture</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/crops"> Crops</Link> |
          <Link to="/contact"> Contact</Link>
        </nav>
      </header>

      <div style={{padding:"20px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
