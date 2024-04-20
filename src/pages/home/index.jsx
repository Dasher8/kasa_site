import React from "react";
import LayoutDefault from "../../layouts/default";
import Cards from "../../containers/cards";
import Banner from "../../components/banner";
import imageBanner from "../../assets/banner.svg";

import "./styles.scss";

export default function Home() {
  return (
    <LayoutDefault page="home">
      <Banner src={imageBanner} title={"Chez vous, partout et ailleurs"} />
      <Cards />
    </LayoutDefault>
  );
}
