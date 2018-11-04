import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TimeAgo from 'timeago-react';

import PostCell from './PostCell';
import SearchBar from './SearchBar';
import { readAllPosts } from '../index';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			dropdownState: "All",
		};

		readAllPosts().then((posts) => {
			this.setState({ posts });
		});
	}

	postStates = {
		"Very Sad": "a",
		"Sad": "b",
		"Happy": "c",
		"Very Happy": "d",
		"All": "e"
	};

	updateDropdownState = (dropdownState) => {
		this.setState({ dropdownState });
	}

	render() {
		const posts = this.state.posts;
		const dropdownState = this.state.dropdownState;
		return (
			<div>
				<SearchBar updateDropdownState={this.updateDropdownState} />
				{posts.filter((post) => {
					return (post.score === this.postStates[dropdownState] || dropdownState == "All");
				}).map((post) => (
					<PostCell
						text={post.text}
						userId={post.name}
						timestamp={<TimeAgo datetime={post.timestamp} />}
						emotion={scoreToEmoji(post.score)}
					/>
				))}
			</div>
		);
	}
}

const scoreToEmoji = (score) => {
	switch (score) {
		case 'a':
			return '😭';
		case 'b':
			return '😞';
		case 'c':
			return '🙂';
		case 'd':
			return '😁';
		default:
			return score;
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(Feed);
