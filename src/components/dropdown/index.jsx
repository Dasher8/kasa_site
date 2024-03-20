import React from "react";

import "./styles.scss";

function Dropdown() {
  return (
    <>
      <li class="dropdown">
        <a href="javascript:void(0)">
          <div className="drop-btn">
            <p>Équipements</p>
            <i class="fa-solid fa-chevron-up"></i>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </a>
        <div class="dropdown-content">
          <p className="first-tag">Climatisation</p>
          <p>Wi-Fi</p>
          <p> Cuisine</p>
          <p>Espace de travail</p>
          <p>Fer à repasser</p>
          <p>Sèche-cheveux</p>
          <p className="last-tag">Cintres</p>
        </div>
      </li>
    </>
  );
}

export default Dropdown;
