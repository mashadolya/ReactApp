import React from "react";
import LocationLogo from "../../../assets/images/svg/location.svg";
import "../userProfileItems/index.css";

const UserProfileItems = (props) => {
  const { user } = props;

  return (
    <div>
      <span>
        <img className="location-img" src={LocationLogo} />
        {user.location}&nbsp;
      </span>
      {user.webSite ? <span>{user.webSite}&nbsp;</span> : null}
      <span>Дата рождения : {user.birthDate}&nbsp;</span>
    </div>
  );
}

export default UserProfileItems;
