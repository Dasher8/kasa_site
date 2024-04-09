import React, { useState } from "react";

import "./styles.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="drop-btn" onClick={toggleDropdown}>
        <span>{title}</span>
        <i
          className={`fa-solid fa-chevron-up`}
          style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)" }}
        ></i>
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
