import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Detail from "./page/Detail";
import NotFound from "./page/NotFound";

function App() {
  const [click, setClick] = useState(false);

  const handleModal = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <Header LoginBtn={handleModal} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {click && <Modal click={handleModal} />}
      <Footer />
    </>
  );
}

export default App;
