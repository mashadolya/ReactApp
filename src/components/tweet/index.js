import React from "react";
import "./index.css";

const Tweet = (props) => {

  const tweet = props.tweet;

  return (
    <div className="tweet">
      <div className="account-name">M_Dolya</div>
      <div>{tweet.text}</div>
      <button
        className="delete-tweet-btn"
        onClick={() => props.deleteTweet(tweet)}>
        Delete Tweet
        </button>
    </div>
  );
}
export default Tweet;
