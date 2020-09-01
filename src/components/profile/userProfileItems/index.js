import React from 'react';

function UserProfileItems(props) {
    return (
        <div>
            <span>{props.user.location}&nbsp;</span>
            {props.user.webSite
                ?
                <span>{props.user.webSite}&nbsp;</span>
                : null
            }
            <span>Дата рождения : {props.user.birthDate}&nbsp;</span>

        </div>
    );
}

export default UserProfileItems;