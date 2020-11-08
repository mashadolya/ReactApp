import React from "react";

const NewTweet = (props) => {

  const handleTweetText = props.handleTweetText;
  const addNewTweet = props.addNewTweet;
  const newTweet = props.newTweet;

  return (
    <div className="new-tweet">
      <input value={newTweet.text} onChange={handleTweetText} />
      <button onClick={addNewTweet}>Твитнуть</button>
    </div>
  );
}

export default NewTweet;
