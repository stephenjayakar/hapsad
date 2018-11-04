import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PostCell from './PostCell';
import SearchBar from './SearchBar';
import { readUserPosts } from '../index';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};

		readUserPosts().then((posts) => {
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
						userId={post.userId}
						timestamp={post.timestamp}
						emotion={post.score}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(Feed);
