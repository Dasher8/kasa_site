import React from "react";

import { Link } from "react-router-dom";
import LayoutDefault from "../../layouts/default";

import "./styles.scss";


export default function Error404() {
  return (
    <LayoutDefault page="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"} className="return-link">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </LayoutDefault>
  );
}
