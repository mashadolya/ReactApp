import React, { useState } from "react";
import TweetButton from "../tweetButton";
import IconBar from "./components/icon-bar";
import "./index.css";

const AddTweet = (props) => {
  const { submitTweet } = props;
  const [value, setValue] = useState("");

  const onTextChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = () => {
    submitTweet(value);
    setValue("");
  };

  return (
    <div className="add-tweet-container">
      <div className="profile-photo-container">
        <img
          className="profile-photo"
          src="https://i.pinimg.com/originals/b5/9f/87/b59f8728480231a869b262c5df1978d9.jpg"
        />
      </div>
      <div className="actions">
        <textarea
          placeholder="What's happening?"
          onChange={onTextChange}
          value={value}
        ></textarea>
        <IconBar></IconBar>
        <TweetButton onClick={onSubmit}></TweetButton>
      </div>
    </div>
  );
};

export default AddTweet;
