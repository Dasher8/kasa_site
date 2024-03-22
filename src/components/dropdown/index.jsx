import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function Dropdown({dropDownTitle, options}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="dropdown">
        <div className="drop-btn" onClick={toggleDropdown}>
          <p>{dropDownTitle}</p>
          <i className={`fa-solid fa-chevron-${isOpen ? "down" : "up"}`}></i>
        </div>
        {isOpen && (
          <ul className="dropdown-content">
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

Dropdown.propTypes = {
  dropDownTitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;
