import React from 'react';

function Wallpaper(props) {
    return (
        <div>
            <img id='wallpaper' src={props.wallpaper} />
        </div>
    );
}

export default Wallpaper;