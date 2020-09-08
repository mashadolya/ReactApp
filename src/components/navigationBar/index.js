import React from 'react';
import { Link } from "react-router-dom";
import '../navigationBar/index.css';
import NavigationButton from '../navigationBar/navigationButton';
import HomeSvg from '../../assets/icons/leftNavigationBar/home.svg';
import SearchSvg from '../../assets/icons/leftNavigationBar/hashtag.svg';
import NotificationSvg from '../../assets/icons/leftNavigationBar/bell.png';
import MessageSvg from '../../assets/icons/leftNavigationBar/message.svg';
import BookmarkSvg from '../../assets/icons/leftNavigationBar/bookmark.svg';
import ListSvg from '../../assets/icons/leftNavigationBar/list.svg';
import UserIconSvg from '../../assets/icons/leftNavigationBar/user_icon.svg';
import MoreSvg from '../../assets/icons/leftNavigationBar/dot-menu-more-option.svg';

function NavigationBar() {

    return (
        <div className='navigationBar'>

            <Link to="/home">
                <NavigationButton {...{ buttonName: 'Главная', buttonImage: HomeSvg }} />
            </Link>
            <Link to='/explore'>
                <NavigationButton {...{ buttonName: 'Поиск', buttonImage: SearchSvg }} />
            </Link>
            <Link to='/notifications'>
                <NavigationButton {...{ buttonName: 'Уведомления', buttonImage: NotificationSvg }} />
            </Link>
            <Link to='/messages'>
                <NavigationButton {...{ buttonName: 'Сообщения', buttonImage: MessageSvg }} />
            </Link>
            <Link to='/bookmarks'>
                <NavigationButton {...{ buttonName: 'Закладки', buttonImage: BookmarkSvg }} />
            </Link>
            <Link to='/lists'>
                <NavigationButton {...{ buttonName: 'Списки', buttonImage: ListSvg }} />
            </Link>
            <Link to="/profile">
                <NavigationButton {...{ buttonName: 'Профиль', buttonImage: UserIconSvg }} />
            </Link>
            <NavigationButton {...{ buttonName: 'Еще', buttonImage: MoreSvg }} />
        </div>
    );
}

export default NavigationBar;