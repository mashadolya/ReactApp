import React from 'react';
import '../editProfileModal/index.css';

function EditProfileModal(props) {

    const showHideClassName = props.isShow ? "modal display-block" : "modal display-none";

    const handleInputChange = e => {
        props.handleInputChange(e);
    };

    const uploadProfileImage = e => {
        props.uploadProfileImage(e);
    };

    const uploadWallpaper = e => {
        props.uploadWallpaper(e);
    };

    return (
        <div id='editModal' className={showHideClassName}>
            <div className="modal-dialog">
                <div className='modal-header'>
                    <h2 className='modal-title'>
                        <button onClick={props.handleClose}>Close</button>
                        Изменить профиль
                        <button onClick={props.handleSave}>Сохранить</button>
                    </h2>
                </div>
                <div className='modal-body'>
                    <p>Новые обои</p>
                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadWallpaper}></input>
                    <p>Новая ава</p>
                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadProfileImage}></input>
                    <p>Имя</p>
                    <input name='name' defaultValue={props.userInfo.name} onChange={handleInputChange}></input>
                    <p>О себе</p>
                    <input name='about' defaultValue={props.userInfo.about} onChange={handleInputChange}></input>
                    <p>Местоположение</p>
                    <input name='location' defaultValue={props.userInfo.location} onChange={handleInputChange}></input>
                    <p>Веб сайт</p>
                    <input name='webSite' defaultValue={props.userInfo.webSite} onChange={handleInputChange}></input>

                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;