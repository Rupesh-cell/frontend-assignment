import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDes from "../pages/ProductDes";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Description from "../pages/Description";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search/:search" element={<Search />} />
        <Route exact path="/productDes/:id" element={<Description />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
