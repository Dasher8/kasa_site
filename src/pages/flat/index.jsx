import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";
import { useParams, useNavigate } from "react-router-dom";

import Carousel from "../../components/carousel";
import Description from "../../components/description";
import Loader from "../../components/loader";

import "./styles.scss";

export default function Flat() {
  const { id } = useParams(); // Obtient le paramètre d'URL "id"
  const navigate = useNavigate();

  const [flat, setFlat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const selectedFlat = data.data.find((item) => item.id === id);
          if (selectedFlat) {
            setFlat(selectedFlat);
          } else {
            navigate("/error");
          }
          setIsLoading(false); 
        }
      });
      
  }, [id, navigate]);

  if (isLoading) {
    return <Loader />;
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
