import React from "react";
import "../wallpaper/index.css";

function Wallpaper(props) {
  //лайфхак на будущее. Когда тебе нужно просто вставить единого родителя как у тебя здесь див, можно воспользоваться React.Fragment
  // и заменить див на <> и </>
  //Он не несёт со стороны вёрстки никакого веса и влияния на саму вёрстку в отличии от дива
  return (
    <div>
      <img id="wallpaper" src={props.wallpaper} />
    </div>
  );
}

export default Wallpaper;
