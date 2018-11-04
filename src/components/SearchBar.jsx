import React, { Component } from 'react';
import {
  Icon,
  Input,
  Menu,
  Dropdown,
} from 'antd';

import HappyPicker from './HappyPicker';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      feeling: '',
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  }

  pickerChanged = (event) => {
    const feeling = event.target.value;
    this.setState({ feeling });
    console.log(event.target.value);
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          All
        </Menu.Item>
        <Menu.Item>
          Very Happy
        </Menu.Item>
        <Menu.Item>
          Happy
        </Menu.Item>
        <Menu.Item>
          Sad
        </Menu.Item>
        <Menu.Item>
          Very Sad
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
        />
	      <Dropdown overlay={menu}><a className="ant-dropdown-link" href="#">
      Mood <Icon type="down" />
    </a></Dropdown>
      </div>
    );
  }
}

export default SearchBar;
