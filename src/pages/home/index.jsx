import React, { useState, useEffect } from "react";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import imageBanner from "../../assets/banner.svg";
import Description from "../../components/description";
import Carousel from "../../components/carousel";
import { slides } from "../../../public/data/carousel.json";
import { data } from "../../../public/data/flats.json";

export default function Home() {
  const { title, location, tags, description, equipments, host, rating } =
    data[0];

  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => response.json())
      .then((response) => {
        setFlat(response.data[0]);
      });
  }, []);

  return (
    <div>
      <Header />
      <Banner src={imageBanner} title={"Chez vous, partout et ailleurs"} />
      {flat && <Carousel pictures={flat.pictures} title={flat.title} />}
      <Description
        title={title}
        location={location}
        tags={tags}
        description={description}
        equipments={equipments}
        host={host}
        rating={rating}
      />
      <Cards />
      <Footer />
    </div>
  );
}
