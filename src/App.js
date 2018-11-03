import React, { Component } from 'react';
import {
  Button,
  Input,
  Layout,
} from 'antd';

import Feed from './components/Feed';
import NewPost from './components/NewPost';
import SideBar from './components/SideBar';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.App}>
      <Layout>
        <SideBar />
      </Layout>
    	{/* <NewPost />
        <Feed /> */}
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
