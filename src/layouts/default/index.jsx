import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

export default function LayoutDefault({ page, children }) {
  return (
    <div className={`page page-${page}`}>
      <Header />
      <div className={"page-content"}>{children}</div>
      <Footer />
    </div>
  );
}
