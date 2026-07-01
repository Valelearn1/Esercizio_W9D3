import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Search from "./assets/components/Search";
import Cards from "./assets/components/Cards";
import Footer from "./assets/components/Footer";
import fantasyData from "./assets/data/fantasy.json";

function App() {
  const [searchTitle, setSearchTitle] = useState("");

  const filteredBooks = fantasyData.filter((book) =>
    book.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Search searchTitle={searchTitle} onSearchChange={setSearchTitle} />
      <Cards books={filteredBooks} />
      <Footer />
    </div>
  );
}

export default App;
