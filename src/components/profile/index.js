import React from "react";
import TweetList from "../tweetList";
import ProfileInfo from "./components/profileInfo";

const ProfilePage = (props) => {

  const { user, tweets, deleteTweet, updateUserInfo, handleUserInfoChange } = props;

  return (
    <div className="primary-content">

      <ProfileInfo
        user={user}
        updateUserInfo={updateUserInfo}
        handleUserInfoChange={handleUserInfoChange}
      />

      <TweetList
        tweets={tweets}
        deleteTweet={deleteTweet}
      />

    </div>
  );
};

export default ProfilePage;
