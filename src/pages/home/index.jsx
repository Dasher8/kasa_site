import React from "react";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import imgSrc from "../../assets/banner.svg";

export default function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      <Header />
      <Banner imgSrc={imgSrc} bannerTitle={bannerTitle} />
      <Cards />
      <Footer />
    </div>
  );
}
