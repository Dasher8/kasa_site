import React from "react";

import Header from "../../components/header";
import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";
import Footer from "../../components/footer"; 
import imgSrc from "../../assets/about_banner.svg"

export default function About() {
  const dropDownTitle="Fiabilité";
  return (
    <>
      <Header />
      <Banner imgSrc={imgSrc} />
      <Dropdown dropDownTitle={dropDownTitle} options={["Wifigvhbjn,dmb.kxjdb,mxnbcv.lzkdfblzn.vbz.lfkb/zlkfbnlzdnb lcn "]}/>
      <Dropdown dropDownTitle={dropDownTitle} options={["Wifigvhbjn,dmb.kxjdb,mxnbcv.lzkdfblzn.vbz.lfkb/zlkfbnlzdnb lcn "]}/>
      <Dropdown dropDownTitle={dropDownTitle} options={["Wifigvhbjn,dmb.kxjdb,mxnbcv.lzkdfblzn.vbz.lfkb/zlkfbnlzdnb lcn "]}/>
      <Dropdown dropDownTitle={dropDownTitle} options={["Wifigvhbjn,dmb.kxjdb,mxnbcv.lzkdfblzn.vbz.lfkb/zlkfbnlzdnb lcn "]}/>
      <Footer />
    </>
  );
}
