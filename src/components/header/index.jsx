import React from "react";

import "./style.scss";

import LogoRed from "../../assets/logo_red.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="#">
          <img src={LogoRed} className="logo" alt="Logo" />
        </a>
      </div>
      <nav className="navbar">
        <a href="#">
          <li>Accueil</li>
        </a>
        <a href="#">
          <li>A Propos</li>
        </a>
      </nav>
    </header>
  );
}
