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
      dropdownState: 'All',
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
    this.props.updateTextQuery(value);
  }

  pickerChanged = (event) => {
    const feeling = event.target.value;
    this.setState({ feeling });
    console.log(event.target.value);
  }

  dropdownHandle = ({key}) => {
    this.setState({ dropdownState: key });
    this.props.updateDropdownState(key);
  }

  render() {
    const menu = (
      <Menu onClick={this.dropdownHandle}>
        <Menu.Item key="All">All</Menu.Item>
        <Menu.Item key="Very Happy">Very Happy</Menu.Item>
        <Menu.Item key="Happy">Happy</Menu.Item>
        <Menu.Item key="Sad">Sad</Menu.Item>
        <Menu.Item key="Very Sad">Very Sad</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Input.Search
          value={this.state.value}
          onChange={this.handleChange}
        />
	      <Dropdown overlay={menu}><a className="ant-dropdown-link" href="#">
      {this.state.dropdownState} <Icon type="down" />
    </a></Dropdown>
      </div>
    );
  }
}

export default SearchBar;
