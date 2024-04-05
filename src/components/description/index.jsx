import React from "react";
import "./styles.scss";
import Dropdown from "../../components/dropdown";

export default function Description({
  title,
  location,
  tags,
  description,
  equipments,
  host,
  rating
}) {
  const dropDownTitle = "Description";
  const secondDropDownTitle = "Équipements";

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{location}</p>
      <span>{tags}</span>
      <div className="host">{host}</div>
      <span className="rating">{rating}</span>
      <Dropdown title={dropDownTitle}>
        <p>{description}</p>
      </Dropdown>
      <Dropdown title={secondDropDownTitle}>
        <ul>{equipments}</ul>
      </Dropdown>
    </div>
  );
}
