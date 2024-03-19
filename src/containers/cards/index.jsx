import React, { useState, useEffect } from "react";

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
    <div>
      {flats.map((item, index) => (
        <Card key={index} title={item.title} />
      ))}
    </div>
  );
}
