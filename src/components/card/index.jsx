import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./style.scss";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/flats/${id}`} className="card" id={id} >
      <img src={cover} alt={title} className="cover" />
      <span className="title">{title}</span>
    </Link>
  );
}
