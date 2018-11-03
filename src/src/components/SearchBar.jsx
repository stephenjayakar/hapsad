import React, { Component } from 'react';
import {
  Input,
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
    return (
      <div>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
        />
	    <HappyPicker onChange={this.pickerChanged} />
      </div>
    );
  }
}

export default SearchBar;
