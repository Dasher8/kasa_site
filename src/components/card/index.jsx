import React, { useState, useEffect } from "react";

import "./style.scss";

export default function Card({ id, title, cover }) {
  return (
    <div className="card" id={id}>
      <div className="content">
        <img src={cover} alt={title} className="cover" />
        <span className="title">{title}</span>
      </div>
    </div>
  );
}
