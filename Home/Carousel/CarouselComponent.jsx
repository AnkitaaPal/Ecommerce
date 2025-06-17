import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-material-ui-carousel";
import "./CarouselComponent.css";


const CarouselComponent = () => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
  return (
    <div className="carouselComponent">
    <Carousel>
        {items.map((item) => items.name)}
    </Carousel>
    </div>  
  );
}

export default CarouselComponent;