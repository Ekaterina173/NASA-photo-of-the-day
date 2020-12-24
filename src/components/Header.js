import React from "react";
import nasa_logo_pic from "../nasa_logo_pic.jpg";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img src={nasa_logo_pic} className="logo" alt="" />
      <h2>Astronomy Picture of the Day</h2>
    </div>
  );
};

export default Header;
