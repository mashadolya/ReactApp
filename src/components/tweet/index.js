import React from 'react';
import '../tweet/index.css';

class Tweet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='tweet'>
                <div className='account-name'>M_Dolya</div>
                <div>{this.props.tweet.text}</div>
                <button className='delete-tweet-btn' onClick={() => { this.props.deleteTweet(this.props.tweet) }}>Delete Tweet</button>
            </div>
        )
    }
}
export default Tweet;