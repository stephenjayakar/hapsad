import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Button,
  Input,
  Icon,
  Layout,
  Menu,
} from 'antd';

import { store } from './configureStore';
import AppLayout from './components/AppLayout';

const { Content, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div style={styles.App}>
          <AppLayout />
        </div>
      </Provider>
    );
  };
}

const styles = {
  App: {
    maxWidth: 800,
  },
};
