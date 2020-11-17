import React, { useState } from "react";
import Avatar from "../avatar";
import UserProfileItems from "../userProfileItems";
import EditProfileModal from "../editProfileModal";
import Wallpaper from "../wallpaper";
import getFile from "../../../../utils/ElementUtils";
import ProfileHeader from "../profileHeader";
import "../profileInfo/index.css";

const ProfileInfo = (props) => {

  const { user, updateUserInfo, handleUserInfoChange } = props;

  const [wallpaper, setWallpaper] = useState(
    "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg"
  );

  let tempUser;

  //никаких переменных с данными. Можно хранить только конфиги какие-то
  let tempWallpaper = wallpaper;

  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
    tempUser = { ...user };
  };

  const save = () => {
    setIsShowModal(false);
    updateUserInfo(tempUser);
    setWallpaper(tempWallpaper);
  };

  const closeModal = () => {
    setIsShowModal(false);
    tempUser = null;
  };

  const handleInputChange = (e) => {
    const target = e.target.value;
    const propName = e.target.name;
    tempUser = { ...user };
    tempUser[propName] = target;
    handleUserInfoChange(tempUser);
  };

  const uploadProfileImage = (e) => {
    let img = getFile(e);
    tempUser.avatar = URL.createObjectURL(img);
  };

  const uploadWallPaper = (e) => {
    let img = getFile(e);
    tempWallpaper = URL.createObjectURL(img);
  };

  return (
    <>
      <ProfileHeader user={user} />
      <Wallpaper wallpaper={wallpaper} />
      <Avatar user={user} />
      <div className="name">{user.name}</div>
      <div className="username">@{user.username}</div>
      <p></p>
      <div>{user.about}</div>
      <UserProfileItems user={user} />
      <button className="editUserInfo" onClick={showModal}>
        Изменить профиль
      </button>
      {isShowModal ? (
        <EditProfileModal
          isShow={isShowModal}
          handleClose={closeModal}
          handleSave={save}
          user={user}
          handleChange={handleInputChange}
          uploadProfileImage={uploadProfileImage}
          uploadWallpaper={uploadWallPaper}
        />
      ) : null}
    </>
  );
}

export default ProfileInfo;
