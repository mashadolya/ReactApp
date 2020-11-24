import React, { useState } from "react";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/home";
import ProfilePage from "./components/profile";
import BlueButton from "./components/blueButton";
import LoginPage from "./pages/loginPage";

function App() {

  const [isLogged, setIslogged] = useState(false);

  const [tweets, setTweets] = useState([
    { id: 0, text: "First tweet" },
    { id: 1, text: "Second tweet" },
  ]);

  const [user, setUser] = useState({
    avatar:
      "https://i.pinimg.com/originals/b5/9f/87/b59f8728480231a869b262c5df1978d9.jpg",
    name: "Maria",
    username: "M_Dolya",
    password: "12345",
    about: "Hello, I am Soft",
    location: "Minsk",
    webSite: "https://vk.com/id152965732",
    birthDate: "03.06.1997",
  });

  const [tempUser, setTempUser] = useState({});

  const updateUserInfo = (user) => {
    setUser(tempUser);
  };

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

  const handleUserInfoChange = (changedUser) => {
    setTempUser(changedUser);
  }

  const [isShowErrorHeader, setIsShowErrorHeader] = useState(false);

  const logIn = (isLogged) => {
    if (isLogged) {
      setIslogged(true)
    }
    else {
      setIslogged(false);
      setIsShowErrorHeader(true);
    }
  }

  return (
    <div className="app">

      {isLogged ?

        <BrowserRouter>
          <NavigationBar />

          <BlueButton
            btnText={"Tweet"}
            onClick={addNewTweet} />

          <Switch>
            <Route
              path="/profile"
              render={() => (
                <ProfilePage
                  user={user}
                  tweets={tweets}
                  deleteTweet={deleteTweet}
                  updateUserInfo={updateUserInfo}
                  handleUserInfoChange={handleUserInfoChange} />
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
        : <LoginPage
          username={user.username}
          password={user.password}
          handleLogin={logIn}
          isShowErrorHeader={isShowErrorHeader}
        />
      }
    </div>
  );
}

export default App;
