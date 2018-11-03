import React, { Component } from 'react';
import {
  Button,
  Input,
} from 'antd';

import HappyPicker from './HappyPicker';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  }
  
  handleSubmit = (event) => {
    console.log(this.state.value);
  }

  // TODO: This should change state
  pickerChanged = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Input.TextArea
          value={this.state.value}
          onChange={this.handleChange}
        />
	<HappyPicker onChange={this.pickerChanged}/>
        <Button onClick={this.handleSubmit}>Post</Button>
      </div>
    );
  }
}

export default NewPost;
