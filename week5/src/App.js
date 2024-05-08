import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);
  const handleLogin = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Modal />
      <Footer />
    </>
  );
}

export default App;
