import React from "react";

import LogoWhite from "../../assets/logo_white.svg";

import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={LogoWhite} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
