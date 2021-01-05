import React from 'react';
import "./index.css";

const Input = (props) => {
    const { title, text, maxLength, onChange, propName } = props;

    const handlInputChange = (e) => {
        onChange(e);
    }

    return (
        <div className="input-container">
            <div className="input-title">{title}</div>
            {maxLength
                ?
                <div>
                    <input name={propName} defaultValue={text || ""} onChange={handlInputChange} maxLength={maxLength} />
                    <div className="bottom-header">
                        <div className="length-counter">{maxLength}</div>
                    </div>
                </div>
                :
                <input name={propName} defaultValue={text} onChange={handlInputChange} />
            }

        </div>
    )
}

export default Input;