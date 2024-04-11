import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import imageBanner from "../../assets/banner.svg";

import "./styles.scss";

export default function Home() {
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data) && data.data.length > 0) {
          setFlat(data.data[0]); // Set the first flat from the data array
        }
      })
      .catch((error) => {
        console.error("Error fetching flats:", error);
      });
  }, []);

  return (
    <LayoutDefault page="home">
      <Banner src={imageBanner} title={"Chez vous, partout et ailleurs"} />
      <Cards flat={flat} />
    </LayoutDefault>
  );
}
