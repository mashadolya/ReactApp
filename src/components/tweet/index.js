import React from "react";
import "../tweet/index.css";

//Тоже самое, функциональный компонент тут

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tweet">
        <div className="account-name">M_Dolya</div>
        <div>{this.props.tweet.text}</div>
        <button
          className="delete-tweet-btn"
          onClick={() => {
            this.props.deleteTweet(this.props.tweet);
          }}
          //   () => {this.props.deleteTweet(this.props.tweet);} не пиши так. Анонимная функция будет создаваться при каждом перерендере. Можно просто this.props.deleteTweet(this.props.tweet)
        >
          Delete Tweet
        </button>
      </div>
    );
  }
}
export default Tweet;
