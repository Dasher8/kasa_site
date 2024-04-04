import React, { useState, useEffect } from "react";
import "./styles.scss";
import Dropdown from "../../components/dropdown";

export default function Description({
  title,
  location,
  tags,
  description,
  equipments,
}) {
  const dropDownTitle = "Description";
  const secondDropDownTitle = "Équipements";

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{location}</p>
      <span>{tags}</span>
      <Dropdown title={dropDownTitle}>{description}</Dropdown>
      <Dropdown title={secondDropDownTitle}>{equipments}</Dropdown>
    </div>
  );
}
