import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import Searchbar from "./Searchbar.jsx"

const Header = () => {
  return (
    <div className="headerComponent">
      <div className="logo">
        <h1 style={{color: "white"}}>amazon</h1>
      </div>
      <Searchbar />
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem"><a href="#signin">Sign in</a></li>
          <li className="navItem"><a href="#wishlist">Wishlist</a></li>
          <li className="navItem"><a href="#cart">Cart</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;