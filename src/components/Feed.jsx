import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TimeAgo from 'timeago-react';

import PostCell from './PostCell';
import SearchBar from './SearchBar';
import { readAllPosts, readUserPosts } from '../index';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			dropdownState: "All",
			words: [],
		};

		if (this.props.scope == "global") {
			readAllPosts().then((posts) => {
				this.setState({ posts });
			});
		} else {
			readUserPosts().then((posts) => {
				this.setState({ posts });
			});
		}
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

	updateTextQuery = (text) => {
		const words = text.trim().split(' ');
		this.setState({ words })
	}

	render() {
		const posts = this.state.posts;
		const dropdownState = this.state.dropdownState;
		const results = posts.filter((post) => {
			let yikes = false;
			if (this.state.words.length > 0) {
				console.log('yikes');
				this.state.words.map((word) => {
					yikes |= post.text.toUpperCase().includes(word.toUpperCase());
				})
			} else {
				yikes = true;
			}
			return (yikes && (post.score === this.postStates[dropdownState] || dropdownState == "All"));
		}).map((post) => (
			<PostCell
				text={post.text}
				userId={post.name}
				timestamp={<TimeAgo datetime={post.timestamp} />}
				emotion={scoreToEmoji(post.score)}
			/>
		));
		return (
			<div style={styles.page}>
				<SearchBar
					updateDropdownState={this.updateDropdownState}
					updateTextQuery={this.updateTextQuery}
				/>
				<p>Showing {results.length} results</p>
				{results}
			</div>
		);
	}
}

const scoreToEmoji = (score) => {
	switch (score) {
		case 'a':
			return '😢';
		case 'b':
			return '🙁';
		case 'c':
			return '🙂';
		case 'd':
			return '😁';
		default:
			return score;
	}
}

const styles = {
	page: {
		marginTop: 20,
	},
};

const mapStateToProps = (state) => ({
	posts: state.posts,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(Feed);
