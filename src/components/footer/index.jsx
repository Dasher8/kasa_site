import React from "react";

import LogoWhite from "../../assets/logo_white.svg";

import { Link } from "react-router-dom";

import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Link to={"/"}>
          <img src={LogoWhite} alt="Logo" />
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
