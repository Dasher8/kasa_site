import React from "react";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import imageBanner from "../../assets/banner.svg";
import Description from "../../components/description";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner src={imageBanner} title={"Chez vous, partout et ailleurs"} />
      <Description />
      <Cards />
      <Footer />
    </div>
  );
}
