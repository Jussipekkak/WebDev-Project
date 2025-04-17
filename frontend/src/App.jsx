import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Entrepreneur from "./components/Entrepreneur";
import Pricing from "./components/Pricing";
import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Entrepreneur />
      <Pricing />
      <Calendar />
      <Contact />
    </div>
  );
}

export default App;
