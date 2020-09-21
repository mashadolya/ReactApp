import React from "react";
import "../avatar/index.css";

const Avatar = (props) => {
  const { user } = props;

  return (
    <img className="avatar" src={user.avatar} alt={user.name} />
  );
}

export default Avatar;
