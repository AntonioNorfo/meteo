import React, { useState } from "react";
import NavbarMeteo from "./components/myNav";
import Home from "./components/home";
import "./App.css";

function App() {
  const [city, setCity] = useState("Palermo");

  return (
    <div className="App">
      <NavbarMeteo onCityChange={setCity} />
      <div className="mt-5">
        <Home city={city} />
      </div>
    </div>
  );
}

export default App;
