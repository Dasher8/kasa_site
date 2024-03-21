import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Banner({ imgSrc, bannerTitle }) {
  return (
    <div className="banner">
      <div className="img-container">
        <div className="img-style"></div>
        <Banner imgSrc={imgSrc} bannerTitle={bannerTitle} />
      </div>
    </div>
  );
}

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string,
};

export default Banner;
