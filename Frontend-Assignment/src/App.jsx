import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDes from "../pages/ProductDes";
import Search from "../pages/Search";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/productDes" element={<ProductDes />} />
        <Route exact path="/search/:search" element={<Search />} />

      </Routes>
    </Router>
  );
};

export default App;
