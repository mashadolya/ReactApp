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

  const addNewTweet = (text) => {
    const newTweet = { id: tweets.length + 1, text };
    const newTweets = [...tweets];
    newTweets.unshift(newTweet);
    setTweets(newTweets);
  };

  const deleteTweet = (tweetId) => {
    let currentTweets = [...tweets];
    let deleteTweetIndex = currentTweets.findIndex((t) => t.id === tweetId);
    if (deleteTweetIndex > -1) {
      currentTweets.splice(deleteTweetIndex, 1);
      setTweets(currentTweets);
    }
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
                tweets={tweets}
                addNewTweet={addNewTweet}
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
