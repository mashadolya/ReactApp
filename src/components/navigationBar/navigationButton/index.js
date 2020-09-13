import React from "react";
import "../navigationButton/index.css";
// можно просто  import "./index.css";

function NavigationButton({ buttonName, buttonImage }) {
  //юзай лучше const, а не function
  return (
    <div className="navigationButton">
      {/* navigation-button */}
      <img className="btnImg" src={buttonImage} />
      {/* а здесь btn-img */}
      <button>{buttonName}</button>
    </div>
  );
}

export default NavigationButton;
