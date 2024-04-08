import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Banner({ src, title }) {
  return (
    <div className="banner">
      <div className="img-container">
        <div className="img-style"></div>
        <img src={src} className="banner-img" alt="Banner"></img>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Banner;
