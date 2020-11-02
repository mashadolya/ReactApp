import React from "react";
import '../tweetButton/index.css';

const TweetButton = (props) => {
    const onclick = props.onclick;


    return (
        <button className="tweet-button" onClick={() => onclick}>Твитнуть</button>
    )
}

export default TweetButton;