import React from "react";
import "./index.css";

const BlueButton = (props) => {
  const { btnText, onClick } = props;
  return (
    <button className="blue-button" onClick={onClick}>
      {btnText}
    </button>
  );
};

export default BlueButton;
