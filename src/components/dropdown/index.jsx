import React, { useState } from "react";

import "./styles.scss";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="dropdown">
        <div className="drop-btn" onClick={toggleDropdown}>
          <p>Équipements</p>
          <i className={`fa-solid fa-chevron-${isOpen ? "down" : "up"}`}></i>
        </div>
        {isOpen && (
          <ul className="dropdown-content">
            <li className="first-tag">Climatisation</li>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li className="last-tag">Cintres</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;
