import React from "react";
import "../editProfileModal/index.css";
import Input from "../../../input";

function EditProfileModal(props) {
  const userName = props.userInfo.name;

  const showHideClassName = props.isShow
    ? "modal display-block"
    : "modal display-none"; // а почему это нельзя сделать непосредственно в строчке где это юзается?)

  const handleInputChange = (e) => {
    props.handleInputChange(e);
  };

  const uploadProfileImage = (e) => {
    props.uploadProfileImage(e);
  };

  const uploadWallpaper = (e) => {
    props.uploadWallpaper(e);
  };

  return (
    <div id="editModal" className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-header">
          <h2 className="modal-title">
            <button onClick={props.handleClose}>Close</button>
            Изменить профиль
            <button onClick={props.handleSave}>Сохранить</button>
          </h2>
        </div>
        <div className="modal-body">
          <p>Новые обои</p>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={uploadWallpaper}
          ></input>
          <p>Новая ава</p>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={uploadProfileImage}
          ></input>

          <Input
            label={"Имя"}
            defaultValue={userName}
            handleInputChange={handleInputChange}
            maxLength={20}
          />

          <p>О себе</p>
          <input
            name="about"
            defaultValue={props.userInfo.about}
            onChange={handleInputChange}
          ></input>
          <p>Местоположение</p>
          <input
            name="location"
            defaultValue={props.userInfo.location}
            onChange={handleInputChange}
          ></input>
          <p>Веб сайт</p>
          <input
            name="webSite"
            defaultValue={props.userInfo.webSite}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
