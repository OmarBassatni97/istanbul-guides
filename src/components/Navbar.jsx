import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <p>GUIDES</p>
      </div>
      <div className="nav">
        <a href="/">Home Page</a>
        <a href="/">About Us</a>
        <a href="/">Guides Istanbul</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="nav-icons">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div className="whatsapp">
          <WhatsAppIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
