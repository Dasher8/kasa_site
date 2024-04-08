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

  const note = rating;
  const stars = Array(5)
    .fill()
    .map((_, index) => (
      <i
        key={index}
        className="fa-solid fa-star"
        style={{ color: index < note ? "#ff6060" : "#e3e3e3" }}
      ></i>
    ));

  return (
    <section className="ddd">
      <div className="description-container">
        <div>
          <h1 className="title">{title}</h1>
          <p className="location">{location}</p>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <ul className="tags-list" key={index}>
                <li className="tag">{tag}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="host-container">
          <div className="host">
            <p className="host-name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="host-picture" />
          </div>
          <span className="rating">{stars}</span>
        </div>
      </div>
      <div className="drop-container">
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
    </section>
  );
}
