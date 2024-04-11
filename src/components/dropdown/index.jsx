import React, { useState } from "react";

import "./styles.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen && "active"}`}>
      <button className="drop-btn" onClick={toggleDropdown}>
        <span className="title">{title}</span>
        <i className={`fa-solid fa-chevron-up`}></i>
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
