import React, {useState} from "react";

import "./styles.scss"

 const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return <div className="carousel">
        <i class="fa-solid fa-chevron-left" onClick={prevSlide}></i>
        {data.map((item, index) => {
            return <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"}/>
        })}
        <i class="fa-solid fa-chevron-right" onClick={nextSlide}></i>
    </div>
}

export default Carousel;