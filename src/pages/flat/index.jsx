import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

export default function Flat() {
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/flats.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Parcours les data pour regarder s'il y en a un qui correspondant à id

        // Si pas de resultat alors on affiche la page 404
      });
  }, []); // => se lance au chargement du composant

  return <div>page d'un appartement {id} </div>;
}
