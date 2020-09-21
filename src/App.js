import React from "react";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfileInfo from "./components/profile/profileInfo";
import TweetList from "./components/tweetList";

function App() {
  return (
    <div className="app">
      <div className="app-header">
      </div>
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/profile" component={ProfileInfo} />
            <Route path="/explore" component={null} />
            <Route path="/notifications" component={null} />
            <Route path="/messages" component={null} />
            <Route path="/bookmarks" component={null} />
            <Route path="/lists" component={null} />
            <Route path="/home" component={TweetList} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
