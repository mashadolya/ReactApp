import React from 'react';
import LocationLogo from '../../../svg/location.svg';
import '../userProfileItems/index.css';

function UserProfileItems(props) {
    return (
        <div>
            <span>
                <img className='locationImg' src={LocationLogo} />
                {props.user.location}&nbsp;</span>
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