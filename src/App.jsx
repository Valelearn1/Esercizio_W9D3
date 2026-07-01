import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Cards from "./assets/components/Cards";
import Footer from "./assets/components/Footer";
import fantasyData from "./assets/data/fantasy.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Cards books={fantasyData} />
      <Footer />
    </div>
  );
}

export default App;
