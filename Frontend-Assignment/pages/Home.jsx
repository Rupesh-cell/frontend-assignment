import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Featured />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
