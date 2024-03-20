import React from "react";

import "./styles.scss";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Error404() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="#">
          <p className="return-link">Retourner sur la page d’accueil</p>
        </a>
      </div>
      <Footer />
    </>
  );
}
