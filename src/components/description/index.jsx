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
  rating,
}) {
  const dropDownTitle = "Description";
  const secondDropDownTitle = "Équipements";

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{location}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <ul key={index}>
            <li>{tag}</li>
          </ul>
        ))}
      </div>
      <div className="host">
        <img src={host.picture} alt={host.name} className="host-picture" />
        <p className="host-name">{host.name}</p>
      </div>
      <span className="rating">{rating}</span>
      <Dropdown title={dropDownTitle}>
        <p>{description}</p>
      </Dropdown>
      <Dropdown title={secondDropDownTitle}>
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
}
