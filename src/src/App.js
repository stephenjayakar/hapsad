import React, { Component } from 'react';
import NewPost from './components/NewPost';
import {
  Button,
  Input,
} from 'antd';
import HappyPicker from './components/HappyPicker';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.App}>
	<NewPost />
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
