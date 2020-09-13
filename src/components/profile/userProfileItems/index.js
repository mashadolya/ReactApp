import React from "react";
import LocationLogo from "../../../svg/location.svg";
import "../userProfileItems/index.css";

function UserProfileItems(props) {
  //пропсы лучше деструктуризировать и так с ними удобнее и правильнее работать
  // можно перед return писать так: const {user} = props;
  //и ты сможешь обращаться к user, а не props.user
  //так удобнее писать и ты не замутаешь случайно пропсы
  return (
    <div>
      <span>
        <img className="locationImg" src={LocationLogo} />
        {props.user.location}&nbsp;
      </span>
      {props.user.webSite ? <span>{props.user.webSite}&nbsp;</span> : null}
      <span>Дата рождения : {props.user.birthDate}&nbsp;</span>
    </div>
  );
}

export default UserProfileItems;
