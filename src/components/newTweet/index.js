import React from 'react';

class NewTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='new-tweet'>
                <input onChange={this.props.handleTweetText} />
                <button onClick={this.props.addNewTweet}>Твитнуть</button>
            </div>
        )
    }
}

export default NewTweet;