import React from "react";
import "./index.css";
import Navigation from '../../navigationBar/navigation';

const ProfileHeader = (props) => {

    const { user } = props;

    return (
        <div id="profile-header">
            <Navigation linkTo={"/home"} btnName={"<-"} btnImg={null} />
            <b>{user.name}</b>
        </div>
    )
}

export default ProfileHeader;