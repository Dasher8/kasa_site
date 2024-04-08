import React from "react";

import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import "./style.scss";

import LogoRed from "../../assets/logo_red.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={LogoRed} className="logo" alt="Logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={location.pathname === "/about" ? "active" : ""}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
