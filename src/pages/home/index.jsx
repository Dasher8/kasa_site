import React from "react";

import Cards from "../../containers/cards";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}
