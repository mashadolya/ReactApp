import React, { useState } from "react";
import "./index.css";

const BlueButton = (props) => {
  const { btnText, onClick, isDesabled } = props;


  return (
    <button className="blue-button" onClick={onClick} disabled={!isDesabled}>
      {btnText}
    </button>
  );
};

export default BlueButton;
