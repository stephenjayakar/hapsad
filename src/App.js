import React, { Component } from 'react';
import {
  Button,
  Input,
} from 'antd';

import Feed from './components/Feed';
import NewPost from './components/NewPost';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.App}>
    	<NewPost />
        <Feed />
      </div>
    );
  };
}

const styles = {
  App: {
    marginLeft: 12,
    maxWidth: 400,
  },
};
