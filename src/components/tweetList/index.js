import React from 'react';
import Tweet from '../tweet';
import NewTweet from '../newTweet';
import '../tweetList/index.css';

class TweetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets: [{ id: 0, text: "First tweet" },
            { id: 1, text: "Second tweet" }
            ],
            newTweet: {}
        }
    }

    addNewTweet = () => {
        if (Object.keys(this.state.newTweet).length) {
            let currentTweets = [...this.state.tweets];
            currentTweets.unshift(this.state.newTweet);
            this.setState({ tweets: currentTweets });
        }
    }

    handleTweetText = (e) => {
        let newTweet = { id: this.state.tweets.length + 1, text: e.target.value };
        this.setState({ newTweet });
    }

    deleteTweet = (tweetId) => {
        let currentTweets = [...this.state.tweets];
        let tweetToBeDeleted = currentTweets.findIndex(t => t.id === tweetId.id);
        currentTweets.splice(tweetToBeDeleted, 1);
        this.setState({ tweets: currentTweets });
    }

    render() {
        return (
            <div className='tweet-view'>
                <NewTweet handleTweetText={this.handleTweetText} addNewTweet={this.addNewTweet} />
                <div className='tweet-list'>
                    {this.state.tweets.map((t) => (
                        <Tweet key={t.id} tweet={t} deleteTweet={this.deleteTweet} />
                    ))}
                </div>
            </div>
        )
    }
}

export default TweetList;