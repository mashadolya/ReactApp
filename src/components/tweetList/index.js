import React, { useState } from 'react';
import Tweet from '../tweet';
import NewTweet from '../newTweet';
import './index.css';

const TweetList = () => {

    const [tweets, setTweets] = useState(
        [{ id: 0, text: "First tweet" },
        { id: 1, text: "Second tweet" }
        ]);

    const [newTweet, setNewTweet] = useState({});

    const addNewTweet = () => {
        if (Object.keys(newTweet).length) {
            let currentTweets = [...tweets];
            currentTweets.unshift(newTweet);
            setTweets(currentTweets);
        }
    }

    const handleTweetText = (e) => {
        let newTweet = { id: tweets.length + 1, text: e.target.value };
        setNewTweet(newTweet);
    }

    const deleteTweet = (tweet) => {
        let currentTweets = [...tweets];
        let tweetToBeDeleted = currentTweets.findIndex(t => t.id === tweet.id);
        currentTweets.splice(tweetToBeDeleted, 1);
        setTweets(currentTweets);
    }

    return (
        <div className='tweet-view'>
            <NewTweet
                handleTweetText={handleTweetText}
                addNewTweet={addNewTweet} />
            <div className='tweet-list'>
                {tweets.map((t) => (
                    <Tweet
                        key={t.id}
                        tweet={t}
                        deleteTweet={deleteTweet} />
                ))}
            </div>
        </div>
    )

}

export default TweetList;