import React from "react";

import Header from "../../components/header";
import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";
import Footer from "../../components/footer";
import imgSrc from "../../assets/about_banner.svg";

import "./styles.scss";

export default function About() {
  const dropDownTitle = "Fiabilité";
  const secondDropDownTitle = "Respect";
  const thirdDropDownTitle = "Service";
  const forthDropDownTitle = "Sécurité";
  return (
    <div className="about">
      <Header />
      <div className="about-main">
      <Banner src={imgSrc} />
      <Dropdown title={dropDownTitle}>
      <p>qsdqsdqsd</p>
      </Dropdown>
      <Dropdown title={secondDropDownTitle}>
        <p>qsdqsdqsd</p>
      </Dropdown>
      <Dropdown title={thirdDropDownTitle}>
        <p>qsdqsdqsd</p>
      </Dropdown>
      <Dropdown title={forthDropDownTitle}>
        <p>qsdqsdqsd</p>
      </Dropdown>
      </div>
      <Footer />
    </div>
  );
}
