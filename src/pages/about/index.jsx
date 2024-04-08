import React from "react";

import Header from "../../components/header";
import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";
import Footer from "../../components/footer";
import imgSrc from "../../assets/about_banner.svg";

export default function About() {
  const dropDownTitle = "Fiabilité";
  return (
    <>
      <Header />
      <Banner src={imgSrc} />
      <Dropdown title={dropDownTitle}>
        <ul>
          <li>qsdqsd</li>
          <li>qsdqsd</li>
        </ul>
      </Dropdown>
      <Dropdown title={dropDownTitle}>
        <p>qsdqsdqsd</p>
      </Dropdown>
      <Footer />
    </>
  );
}
