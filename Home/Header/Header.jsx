import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import Searchbar from "./Searchbar.jsx";
const Header = () => {
  return (
    <div className="headerComponent">
      <div className="logo">
        <h1 style={{color: "white"}}>amazon</h1>
      </div>
      <Searchbar />
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem">Home</li>
          <li className="navItem">Sign in</li>
          <li className="navItem">Wishlist</li>
          <li className="navItem">Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;