import React from "react";

import "./style.scss";

import BannerImg from "../../assets/banner.svg";

function Banner() {
  return (
    <div className="banner">
      <div className="img-container">
        <div className="img-style"></div>
        <img className="banner-img" src={BannerImg} alt="Banner" />
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
