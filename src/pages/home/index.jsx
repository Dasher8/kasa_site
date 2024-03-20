import React from "react";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
    </div>
  );
}
