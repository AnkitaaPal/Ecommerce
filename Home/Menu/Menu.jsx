import React from "react";
import ReactDOM from "react-dom/client";
import "./Menu.css";
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
  return (
    <div className="menuComponent">
      <ul className="menuList">
        <li className="menuItem"><MenuIcon /></li>
        <li className="menuItem">Men</li>
        <li className="menuItem">Women</li>
        <li className="menuItem">Kids</li>
        <li className="menuItem">Accessories</li>
      </ul>
    </div>
  );
}

export default Menu;