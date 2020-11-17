import React from "react";
import AddTweet from "../addTweet";
import TweetList from "../tweetList";

const HomePage = (props) => {
  const { tweets, addNewTweet, deleteTweet } = props;

  return (
    <div className="primary-content">
      <AddTweet submitTweet={addNewTweet}></AddTweet>
      <TweetList tweets={tweets} deleteTweet={deleteTweet} />
    </div>
  );
};

export default HomePage;
