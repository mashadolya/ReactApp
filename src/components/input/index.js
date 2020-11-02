import React from "react";
import './index.css';


const Input = (props) => {

    return (
        <div className="tweeter-input-form">
            <p>{props.label}</p>
            <input className="tweeter-input-default"
                name={props.label}
                defaultValue={props.defaultValue}
                onChange={props.handleInputChange}
                maxLength={props.maxLength}
            ></input>
        </div>
    );
}

export default Input;