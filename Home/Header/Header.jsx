import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import Searchbar from "./Searchbar.jsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  const [user, isUser] = React.useState(true);

  return (
    <div className="headerComponent">
      <div className="logo">
        <img
          src="data:image/jpeg;base64,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"
          alt="Amazon Logo"
          className="logoImage" />
      </div>
      <Searchbar />
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem"><HomeIcon /></li>
          {user ?
            <li className="navItem"><AccountCircleIcon /></li>
            :
            <li className="navItem">Sign Up/Sign In</li>}
          <li className="navItem"><FavoriteIcon /></li>
          <li className="navItem">
            <ShoppingCartIcon className="cartIcon" />
            <span className="cartCount">0</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;