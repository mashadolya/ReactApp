import React from "react";
import "./index.css";

const Wallpaper = (props) => {
  //лайфхак на будущее. Когда тебе нужно просто вставить единого родителя как у тебя здесь див, можно воспользоваться React.Fragment
  // и заменить див на <> и </>
  //Он не несёт со стороны вёрстки никакого веса и влияния на саму вёрстку в отличии от дива

  //все поехало если <></>(((((
  return (
    <div className="img-container">
      <img
        className="wallpaper"
        src={props.wallpaper}
        alt="profile wallpapper"
      />
    </div>
  );
};

export default Wallpaper;
