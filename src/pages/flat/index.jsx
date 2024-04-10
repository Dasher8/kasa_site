import React, { useState, useEffect } from "react";

import Header from "../../components/header";
import Carousel from "../../components/carousel";
import Description from "../../components/description";
import Footer from "../../components/footer";

import { useParams } from "react-router-dom";
import Error404 from "../error404";
import "./styles.scss";

export default function Flat() {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const selectedFlat = data.data.find((item) => item.id === id);
          if (selectedFlat) {
            setFlat(selectedFlat);
          }
        }
      });
  }, [id]);

  if (!flat) {
    return <Error404 />;
  }

  return (
    <div className="flat">
      <Header />
      <div className="flat-main">
        {flat && <Carousel pictures={flat.pictures} title={flat.title} />}
        <Description
          title={flat.title}
          location={flat.location}
          tags={flat.tags}
          description={flat.description}
          equipments={flat.equipments}
          host={flat.host}
          rating={flat.rating}
        />
      </div>
      <Footer />
    </div>
  );
}
