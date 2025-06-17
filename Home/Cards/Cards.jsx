import React from "react";
import ReactDOM from "react-dom";
import CardComponent from "./CardComponent";

const Cards = () => {
  const items = [
    { id: 1, name: "Item 1", image: {itemshirt}, description: "Description 1", price: 10 },
    { id: 2, name: "Item 2", image: itemshirt, description: "Description 2", price: 20 },
    { id: 3, name: "Item 2", image: itemshirt, description: "Description 2", price: 20 },
    { id: 4, name: "Item 2", image: itemshirt, description: "Description 2", price: 20 },
    { id: 5, name: "Item 2", image: itemshirt, description: "Description 2", price: 20 },
    { id: 6, name: "Item 2", image: itemshirt, description: "Description 2", price: 20 },
    { id: 7, name: "Item 2", image: itemshirt, description: "Description 2", price: 20 },
    { id: 8, name: "Item 3", image: itemshirt, description: "Description 3", price: 30 },
    { id: 9, name: "Item 3", image: itemshirt, description: "Description 3", price: 30 },
    // Add more items as needed
  ];

  return (
    <div className="cardsContainer">
        <CardComponent items={items} />
    </div>
    )
}

export default Cards;