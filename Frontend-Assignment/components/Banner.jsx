import React from "react";
import Bann from "../Assets/Bann.svg";
import "../Scss/banner.scss";

const Banner = () => {
  return (
    <div className="main-box">
      <img src={Bann} alt="" />
      <a href="#scrollnow">
        <h1>Shop now</h1>
      </a>
    </div>
  );
};

export default Banner;
