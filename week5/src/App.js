import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useState } from "react";
import Main from "./page/Main";

function App() {
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <Header LoginBtn={handleLogin}></Header>
      <Main />
      {click && <Modal click={handleLogin} />}
      <Footer />
    </>
  );
}

export default App;
