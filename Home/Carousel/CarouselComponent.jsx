import React, { useState, useEffect } from "react";
import Banner1 from "../../utils/images/Banner1.jpg";
import Banner2 from "../../utils/images/Banner2.jpg";
import Banner3 from "../../utils/images/Cart_banner.jpg";
import "./CarouselComponent.css";

const items = [
  { image: Banner1, alt: "Banner 1", caption: "Welcome to our store!" },
  { image: Banner2, alt: "Banner 2", caption: "Best deals of the season" },
  { image: Banner3, alt: "Banner 3", caption: "Shop now and save big!" }
];

const CarouselComponent = () => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 30000); // 30 seconds
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="carouselComponent">
      <button className="carouselBtn prev" onClick={prevSlide}>&#10094;</button>
      <div className="carouselSlide">
        <img src={items[current].image} alt={items[current].alt} className="carouselImage" />
        <div className="carouselCaption">{items[current].caption}</div>
      </div>
      <button className="carouselBtn next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default CarouselComponent;