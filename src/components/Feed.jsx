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
			posts: []
		};

		readAllPosts().then((posts) => {
			this.setState({posts});
		});
	}
	render() {
		const posts = this.state.posts;
		
		return (
			<div>
				<SearchBar />
				{posts.map((post) => (
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
