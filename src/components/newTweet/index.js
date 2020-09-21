import React from "react";

const NewTweet = (props) => {

  const handleTweetText = props.handleTweetText;
  const addNewTweet = props.addNewTweet;

  return (
    <div className="new-tweet">
      <input onChange={handleTweetText} />
      <button onClick={addNewTweet}>Твитнуть</button>
    </div>
  );
}

export default NewTweet;
