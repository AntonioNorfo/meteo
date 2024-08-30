import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarMeteo from "./components/myNav";
import Home from "./components/home";
import Details from "./components/details";
import FooterCards from "./components/FooterCards";
import "./App.css";

function App() {
  const [city, setCity] = useState("Palermo");

  return (
    <Router>
      <div className="App">
        <NavbarMeteo onCityChange={setCity} />
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<Home city={city} />} />
            <Route path="/details/:city" element={<Details />} />
          </Routes>
        </div>
        <FooterCards />
      </div>
    </Router>
  );
}

export default App;
