import React, { useState, useEffect } from "react";

import "./style.scss";

export default function Card({ title }) {
  return <div className={"card"}>{title}</div>;
}
