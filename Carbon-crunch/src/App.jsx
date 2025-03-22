import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/bodycenter/hero";
// import Card from "./Components/cards/cardSection";
import ThreeJsCardSection from "./Components/cards/Threejscardsection.jsx";

function App() {
  return (
    <div className="app">
      {/* <AnimatedBackground /> */}
      <div className="content">
        <Navbar />
        <Hero />
        {/* <Card /> */}
        <ThreeJsCardSection />
      </div>
    </div>
  );
}

export default App;
