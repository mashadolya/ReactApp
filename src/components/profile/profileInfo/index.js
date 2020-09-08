import React, { useState, useEffect } from 'react';
import Avatar from '../avatar';
import UserProfileItems from '../userProfileItems';
import EditProfileModal from '../editProfileModal';
import Wallpaper from '../wallpaper';
import '../profileInfo/index.css';

function ProfileInfo() {
    const [wallpaper, setWallpaper] = useState(
        "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg");

    const [user, setUser] = useState(
        {
            avatar: 'https://i.pinimg.com/originals/b5/9f/87/b59f8728480231a869b262c5df1978d9.jpg',
            name: "Maria",
            username: "M_Dolya",
            about: "Hello, I am Soft",
            location: 'Minsk',
            webSite: 'https://',
            birthDate: '03.06.1997'
        }
    );

    let tempWallpaper = wallpaper;

    let tempUser = {
        avatar: user.avatar,
        name: user.name,
        username: user.username,
        about: user.about,
        location: user.location,
        webSite: user.webSite,
        birthDate: user.birthDate
    };

    const [isShowModal, setIsShowModal] = useState(false);


    const showModal = () => {
        setIsShowModal(true);
        tempUser = { ...user };
    };

    const save = () => {
        setIsShowModal(false);
        setUser(tempUser);
        setWallpaper(tempWallpaper);
    };

    const closeModal = () => {
        setIsShowModal(false);
        tempUser = null;
    }

    const handleInputChange = e => {
        const target = e.target.value;
        const propName = e.target.name;
        tempUser[propName] = target;
    };

    const uploadProfileImage = e => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            tempUser.avatar = URL.createObjectURL(img);
        }
    };

    const uploadWallPaper = e => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            tempWallpaper = URL.createObjectURL(img);
        }
    };


    return (
        <div id='profilePage'>
            <Wallpaper wallpaper={wallpaper} />
            <Avatar user={user} />
            <div className='name'>{user.name}</div>
            <div className='username'>@{user.username}</div>
            <p></p>
            <div>{user.about}</div>
            <UserProfileItems user={user} />
            <button className="editUserInfo" onClick={showModal}>Изменить профиль</button>
            {isShowModal ?
                <EditProfileModal isShow={isShowModal}
                    handleClose={closeModal}
                    handleSave={save}
                    userInfo={user}
                    handleInputChange={handleInputChange}
                    uploadProfileImage={uploadProfileImage}
                    uploadWallpaper={uploadWallPaper} />
                : null}
        </div>
    );
}

export default ProfileInfo;