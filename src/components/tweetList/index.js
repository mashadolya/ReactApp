import React from "react";
import Tweet from "../tweet";

const TweetList = (props) => {
  const { tweets, deleteTweet } = props;

  return (
    <div className="tweet-view">
      <div className="tweet-list">
        {tweets.map((t) => (
          <Tweet key={t.id} tweet={t} deleteTweet={deleteTweet} />
        ))}
      </div>
    </div>
  );
};

export default TweetList;
