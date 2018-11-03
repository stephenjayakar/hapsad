import React, { Component } from 'react';
import NewPost from './components/NewPost';
import SearchBar from './components/SearchBar';
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
  <SearchBar />
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
