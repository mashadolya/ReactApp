import React from "react";
import "./index.css";
import icon from "../../../../assets/images/png/bell.png";

const IconBar = () => {
  return (
    <div className="icon-bar">
      <div className="icon-container">
        <img className="icon" src={icon} />
      </div>
      <div className="icon-container">
        <img className="icon" src={icon} />
      </div>
      <div className="icon-container">
        <img className="icon" src={icon} />
      </div>
      <div className="icon-container">
        <img className="icon" src={icon} />
      </div>
      <div className="icon-container">
        <img className="icon" src={icon} />
      </div>
    </div>
  );
};

export default IconBar;
