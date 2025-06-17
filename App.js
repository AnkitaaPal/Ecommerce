import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Home/Header/Header.jsx";
import Menu from "./Home/Menu/Menu.jsx";
import CarouselComponent from "./Home/Carousel/CarouselComponent.jsx";
import Cards from "./Home/Cards/Cards.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Header />
    <Menu />
    <CarouselComponent />
    <Cards />
    </React.StrictMode>
);