import React, { useState } from "react";

import "./styles.scss";

const Carousel = ({ pictures, title }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  const showNavigation = pictures.length > 1;

  return (
    <div className="carousel">
      {showNavigation && (
        <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
      )}
      {pictures.map((item, index) => (
        <React.Fragment key={index}>
          {index === slide && (
            <img src={item} alt={title} className={"slide"} />
          )}
        </React.Fragment>
      ))}
      {showNavigation && (
        <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
      )}
      {showNavigation && (
        <div className="slide-indicator">{`${slide + 1}/${
          pictures.length
        }`}</div>
      )}
    </div>
  );
};

export default Carousel;
