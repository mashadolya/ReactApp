import React from "react";
import "../tweetButton/index.css";

const TweetButton = (props) => {
  const { onClick } = props;
  return (
    <button className="tweet-button" onClick={onClick}>
      Твитнуть
    </button>
  );
};

export default TweetButton;
