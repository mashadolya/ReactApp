import React from 'react';
import '../wallpaper/index.css';

function Wallpaper(props) {
    return (
        <div>
            <img id='wallpaper' src={props.wallpaper} />
        </div>
    );
}

export default Wallpaper;