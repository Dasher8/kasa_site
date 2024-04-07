import React  from "react";

import "./styles.scss"

 const Carousel = ({ data }) => {
    return <div className="carousel">
        <i class="fa-solid fa-chevron-left"></i>
        {data.map((item, index) => {
            return <img src={item.src} alt={item.alt} key={index} className="slide"/>
        })}
        <i class="fa-solid fa-chevron-right"></i>
    </div>
}

export default Carousel;