import React from "react";

import NewTweet from "../../newTweet";
import TweetList from "../../tweetList";

const HomePage = (props) => {

    const tweets = props.tweets;
    const handleTweetText = props.handleTweetText;
    const addNewTweet = props.addNewTweet;
    const deleteTweet = props.deleteTweet;


    return (
        <div className="primary-content">
            <NewTweet
                handleTweetText={handleTweetText}
                addNewTweet={addNewTweet}
            />
            <TweetList
                tweets={tweets}
                deleteTweet={deleteTweet}
            />
        </div>
    )
}

export default HomePage;