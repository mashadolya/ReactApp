import React from "react";
import TweetList from "../../tweetList";
import ProfileInfo from "../profileInfo";


const ProfilePage = (props) => {
    const tweets = props.tweets;
    const deleteTweet = props.deleteTweet;

    return (
        <div>
            <ProfileInfo tweets={tweets} />
            <TweetList
                tweets={tweets}
                deleteTweet={deleteTweet} />
        </div>

    )
}

export default ProfilePage;