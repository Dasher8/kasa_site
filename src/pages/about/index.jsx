import React from "react";
import LayoutDefault from "../../layouts/default";

import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";
import imgSrc from "../../assets/about_banner.svg";

import "./styles.scss";

export default function About() {
  const dropDownTitle = "Fiabilité";
  const secondDropDownTitle = "Respect";
  const thirdDropDownTitle = "Service";
  const forthDropDownTitle = "Sécurité";
  return (
    <LayoutDefault page="about">
      <Banner src={imgSrc} />
      <Dropdown title={dropDownTitle}>
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Dropdown>
      <Dropdown title={secondDropDownTitle}>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Dropdown>
      <Dropdown title={thirdDropDownTitle}>
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </Dropdown>
      <Dropdown title={forthDropDownTitle}>
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Dropdown>
    </LayoutDefault>
  );
}
