import React from 'react';
import '../editProfileModal';

function EditProfileModal(props) {

    const showHideClassName = props.isShow ? "modal display-block" : "modal display-none";

    const handleInputChange = (e) => {
        props.handleInputChange(e);
    }

    const uploadProfileImage = e => {
        props.uploadProfileImage(e);
    }

    return (
        <div className={showHideClassName}>

            <section className="modal-main">
                <p>Новые обои</p>
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadProfileImage}></input>
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
                <button onClick={props.handleSave}>Сохранить</button>
            </section>
        </div>
    );
};

export default EditProfileModal;