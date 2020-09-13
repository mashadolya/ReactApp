import React from "react";

//лучше юзай функциональные компоненты. Особенно если ты не пользуешься жизненным циклом компонента. Для стейта можешь юзать хук useState
class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="new-tweet">
        <input onChange={this.props.handleTweetText} />
        <button onClick={this.props.addNewTweet}>Твитнуть</button>
      </div>
    );
  }
}

export default NewTweet;
