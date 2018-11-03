import React from 'react';

import PostCell from './PostCell';
import SearchBar from './SearchBar';

export default class Feed extends React.Component {
  render() {
    return (
      <div>
	<SearchBar />
	<PostCell
	  text="Wow I'm really sad"
	  userId="wowsugoi"
	  timestamp={Date()}
	  emotion={'a'}
	/>
      </div>
    );
  }
}
