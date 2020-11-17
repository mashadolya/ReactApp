import React from "react";
import "../editProfileModal/index.css";
import ModalHeader from "./components/header";

import Input from "./components/input";

const EditProfileModal = (props) => {
  const { isShow, user, handleChange, handleClose, handleSave } = props;

  const handleInputChange = (e) => {
    handleChange(e);
  };

  const uploadProfileImage = (e) => {
    uploadProfileImage(e);
  };

  const uploadWallpaper = (e) => {
    uploadWallpaper(e);
  };

  return (
    <div className="edit-nmodal-container">

      <div className=
        {isShow
          ? "modal display-block"
          : "modal display-none"}>
        <div className="modal-dialog">

          <ModalHeader
            close={handleClose}
            save={handleSave}
          />

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
              propName="name"
              title={"Имя"}
              text={user.name}
              onChange={handleInputChange}
              maxLength={50}
            />

            <Input
              propName="about"
              title="about"
              text={user.about}
              onChange={handleInputChange}
              maxLength={160}
            ></Input>

            <Input
              propName="location"
              title="location"
              text={user.location}
              onChange={handleInputChange}
              maxLength={30}
            />

            <Input
              propName="webSite"
              title="webSite"
              text={user.webSite}
              onChange={handleInputChange}
              maxLength={100}
            />
          </div>
        </div>
      </div>

    </div>


  );
}

export default EditProfileModal;
