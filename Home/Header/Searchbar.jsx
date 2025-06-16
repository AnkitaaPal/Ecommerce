import React from "react";
import ReactDOM from "react-dom/client";
import "./Searchbar.css";
import { IconButton } from "@mui/material";

const Searchbar = () => {
  return (
    <div className="searchbarComponent">
      <input type="text" className="searchInput" placeholder="Search for products, brands and more" />
      {/* <button className="searchButton">Search</button> */}
      <IconButton color="warning" variant="solid" disabled={false}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        </IconButton>
    </div>
  );
}

export default Searchbar;