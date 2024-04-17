import React from "react";
import LayoutDefault from "../../layouts/default";

import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";
import imgSrc from "../../assets/about_banner.svg";

import "./styles.scss";

export default function About() {
  const dropDownTitle = "Fiabilité";
  const secondDropDownTitle = "Respect";
  const thirdDropDownTitle = "Service";
  const forthDropDownTitle = "Sécurité";
  return (
    <LayoutDefault page="about">
      <Banner src={imgSrc} />
      <Dropdown title={dropDownTitle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dropdown>
      <Dropdown title={secondDropDownTitle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dropdown>
      <Dropdown title={thirdDropDownTitle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dropdown>
      <Dropdown title={forthDropDownTitle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dropdown>
    </LayoutDefault>
  );
}
