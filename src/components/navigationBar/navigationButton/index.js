import React from "react";
import "./index.css";

const NavigationButton = ({ buttonName, buttonImage }) => {

  return (
    <div className="navigation-button">
      {buttonImage ?
        <img className="btn-img"
          src={buttonImage} />
        : null
      }
      <button>{buttonName}</button>
    </div>
  );
}

export default NavigationButton;
