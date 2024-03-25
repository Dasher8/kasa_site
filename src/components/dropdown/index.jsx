import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button className="drop-btn" onClick={toggleDropdown}>
          <span>{title}</span>
          <i className={`fa-solid fa-chevron-${isOpen ? "down" : "up"}`}></i>
        </button>
        {isOpen && <div className="dropdown-content">{children}</div>}
      </div>
    </>
  );
}

//Dropdown.propTypes = {
//  title: PropTypes.string,
//  children: PropTypes.children,
//};

export default Dropdown;
