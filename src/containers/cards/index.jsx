import React, { useState, useEffect } from "react";

import "./styles.scss"

import Card from "../../components/card";

export default function Cards() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFlats(response.data);
      });
  }, []);

  return (
    <div className="cards-container">
      {flats.map((item, index) => (
        <>
        <Card key={index} id={item.id} title={item.title} cover={item.cover} />
        </>
      ))}
    </div>
  );
}
