import React from "react";

import { Link } from "react-router-dom";

import "./styles.scss";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Error404() {
  return (
    <div className="error-main">
      <Header />
      <div className="container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"} className="return-link">
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
