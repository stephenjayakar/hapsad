import React from 'react';

import Feed from './Feed';

export default class GlobalProfile extends React.Component {
	constructor(props) {
        super(props);
        
		this.state = {
		};
	}

	render() {
		return (
			<Feed scope="global" />
		);
	}
}
const styles = {
	page: {
		marginTop: 20,
	},
};
