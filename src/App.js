import React, { useState } from "react";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/homePage";
import ProfilePage from "./components/profile";
import TweetButton from "./components/tweetButton";

function App() {
  const [tweets, setTweets] = useState([
    { id: 0, text: "First tweet" },
    { id: 1, text: "Second tweet" },
  ]);

  const [newTweet, setNewTweet] = useState({ id: "", text: "" });

  const addNewTweet = () => {
    if (Object.keys(newTweet).length) {
      let currentTweets = [...tweets];
      currentTweets.unshift(newTweet);
      setTweets(currentTweets);
      setNewTweet({ id: "", text: "" });
    }
  };

  const handleTweetText = (e) => {
    let tweetText = e.target.value;
    if (tweetText) {
      let newTweet = { id: tweets.length + 1, text: tweetText };
      setNewTweet(newTweet);
    }
  };

  const deleteTweet = (tweet) => {
    let currentTweets = [...tweets];
    let tweetToBeDeleted = currentTweets.findIndex((t) => t.id === tweet.id);
    currentTweets.splice(tweetToBeDeleted, 1);
    setTweets(currentTweets);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <TweetButton onClick={addNewTweet} />

        <Switch>
          <Route
            path="/profile"
            render={() => (
              <ProfilePage tweets={tweets} deleteTweet={deleteTweet} />
            )}
          />
          <Route path="/explore" component={null} />
          <Route path="/notifications" component={null} />
          <Route path="/messages" component={null} />
          <Route path="/bookmarks" component={null} />
          <Route path="/lists" component={null} />
          <Route
            path="/home"
            render={() => (
              <HomePage
                newTweet={newTweet}
                tweets={tweets}
                addNewTweet={addNewTweet}
                handleTweetText={handleTweetText}
                deleteTweet={deleteTweet}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
