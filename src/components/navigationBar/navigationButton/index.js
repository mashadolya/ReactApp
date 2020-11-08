import React from "react";
import "./index.css";

const NavigationButton = ({ buttonName, buttonImage }) => {
  return (
    <div className="navigation-container">
      {buttonImage ? (
        <img className="btn-img" src={buttonImage} alt="btn-img" />
      ) : null}

      <div className="text"> {buttonName}</div>
    </div>
  );
};

export default NavigationButton;
