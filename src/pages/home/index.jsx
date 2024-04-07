import React from "react";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import imageBanner from "../../assets/banner.svg";
import Description from "../../components/description";
import Carousel from "../../components/carousel";
import { slides } from "../../../public/data/carousel.json";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner src={imageBanner} title={"Chez vous, partout et ailleurs"} />
      <Carousel data={slides}/>
      <Description />
      <Cards />
      <Footer />
    </div>
  );
}
