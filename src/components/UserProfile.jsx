import React from 'react';

import Feed from './Feed';

export default class UserProfile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<Feed scope="user" />
		);
	}
}
const styles = {
	page: {
		marginTop: 20,
	},
};
