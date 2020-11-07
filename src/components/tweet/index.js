import React from "react";
import "./index.css";

const Tweet = (props) => {
  const { tweet, deleteTweet } = props;

  const onDeleteClick = () => {
    deleteTweet(tweet.id);
  };

  return (
    <div className="tweet">
      <div className="account-name">M_Dolya</div>
      <div>{tweet.text}</div>
      <button className="delete-tweet-btn" onClick={onDeleteClick}>
        Delete Tweet
      </button>
    </div>
  );
};
export default Tweet;
