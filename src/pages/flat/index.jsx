import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";

import Carousel from "../../components/carousel";
import Description from "../../components/description";
import Loader from "../../components/loader";

import { useParams } from "react-router-dom";
import Error404 from "../error404";
import "./styles.scss";

export default function Flat() {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError404, setIsError404] = useState(false);

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const selectedFlat = data.data.find((item) => item.id === id);
          if (selectedFlat) {
            setFlat(selectedFlat);
          } else {
            setIsError404(true);
          }
          setIsLoading(false);
        }
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError404) {
    return <Error404 />;
  }

  return (
    <LayoutDefault page="flat">
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
    </LayoutDefault>
  );
}
