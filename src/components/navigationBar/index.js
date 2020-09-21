import React from "react";
import "../navigationBar/index.css";
import Navigation from './navigation';
import HomeSvg from "../../assets/images/svg/home.svg";
import SearchSvg from "../../assets/images/svg/hashtag.svg";
import NotificationSvg from "../../assets/images/png/bell.png";
import MessageSvg from "../../assets/images/svg/message.svg";
import BookmarkSvg from "../../assets/images/svg/bookmark.svg";
import ListSvg from "../../assets/images/svg/list.svg";
import UserIconSvg from "../../assets/images/svg/user_icon.svg";
import MoreSvg from "../../assets/images/svg/dot-menu-more-option.svg";
// у тебя тут в корне проекта папка свг лежит, убери её в assets/images. png & svg нужно держать в разных папка, в одной это моветон
// пусть у тебя будет assets, в ней images, а там уже папки svg & png

function NavigationBar() {

  return (
    <div className="navigation-bar">

      <Navigation linkTo={"/home"} btnName={"Главная"} btnImg={HomeSvg} />
      <Navigation linkTo={"/explore"} btnName={"Поиск"} btnImg={SearchSvg} />
      <Navigation linkTo={"/notifications"} btnName={"Уведомления"} btnImg={NotificationSvg} />
      <Navigation linkTo={"/messages"} btnName={"Сообщения"} btnImg={MessageSvg} />
      <Navigation linkTo={"/bookmarks"} btnName={"Закладки"} btnImg={BookmarkSvg} />
      <Navigation linkTo={"/lists"} btnName={"Списки"} btnImg={ListSvg} />
      <Navigation linkTo={"/profile"} btnName={"Профиль"} btnImg={UserIconSvg} />
      <Navigation linkTo={"/more"} btnName={"Еще"} btnImg={MoreSvg} />
    </div>
  );
}

export default NavigationBar;
