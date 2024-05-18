import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useState } from "react";
import Main from "./page/Main";
import Detail from "./page/Detail";
import { Routes, Route } from "react-router-dom";
import NotFound from "./page/NotFound";

function App() {
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <Header LoginBtn={handleLogin}></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {click && <Modal click={handleLogin} />}
      <Footer />
    </>
  );
}

export default App;
