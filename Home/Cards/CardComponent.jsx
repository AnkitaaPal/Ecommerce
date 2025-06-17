import React from "react";
import ReactDOM from "react-dom"; 
import "./CardComponent.css";

const CardComponent = ({ items }) => {
  return (
    <div className="cardsContainer">
    {items.map((item) => (
    <div className="cardComponent" key={item.id}>
      <h2 className="cardTitle">{item.name}</h2>
      <img src={item.image} alt="image" />
      <p className="cardDescription">{item.description}</p>
      <p className="cardPrice">${item.price}</p>
      <button className="cardButton">Add to Cart</button>
    </div>))}
    </div>
  );
}

export default CardComponent;