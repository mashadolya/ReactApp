import React, { useState } from "react";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/homePage"
import ProfilePage from "./components/profile/profilePage";
import TweetButton from "./components/tweetButton";

function App() {

  const [tweets, setTweets] = useState(
    [
      { id: 0, text: "First tweet" },
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
    <div className="app">
      <div className="app-header">
      </div>
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/profile" render={() => (<ProfilePage tweets={tweets} deleteTweet={deleteTweet} />)} />
            <Route path="/explore" component={null} />
            <Route path="/notifications" component={null} />
            <Route path="/messages" component={null} />
            <Route path="/bookmarks" component={null} />
            <Route path="/lists" component={null} />
            <Route path="/home"
              render={() => (<HomePage tweets={tweets} addNewTweet={addNewTweet} handleTweetText={handleTweetText} deleteTweet={deleteTweet} />
              )} />
          </Switch>
        </BrowserRouter>
        <TweetButton onClick={addNewTweet} />
      </div>
    </div>
  );
}

export default App;
