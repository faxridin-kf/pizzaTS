import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./Pages/cart";
import Home from "./Pages/home";
import NotFoundBlock from "./Pages/notFount";
import "./scss/app.scss";
function App() {
  return (
    <>
      {" "}
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundBlock />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
