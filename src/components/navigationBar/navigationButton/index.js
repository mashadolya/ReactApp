import React from 'react';
import '../navigationButton/index.css';

function NavigationButton({ buttonName, buttonImage }) {

    return (
        <div className='navigationButton'>
            <img className='btnImg' src={buttonImage} />
            <button >{buttonName}</button>
        </div>
    );

}

export default NavigationButton;