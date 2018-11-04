import React, { Component } from 'react';
import {
  Button,
  Input,
  Row,
  Col,
} from 'antd';

import HappyPicker from './HappyPicker';

import { insertPost, readUserPosts, readAllPosts } from '../index.js';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      emotion: 'd',
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  }

  handleSubmit = (event) => {
    let { value, emotion } = this.state;
    value = value.trim();
    if (value === '') {
      return;
    }
    this.setState({ value: "" });
    insertPost(value, emotion);
  }

  // TODO: This should change state
  pickerChanged = (event) => {
    const emotion = event.target.value;
    this.setState({ emotion });
  }

  render() {
    return (
      <div style={styles.page}>
        <Input.TextArea
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="What's on your mind?"
        />
        <Row>
          <Col xs={{ span: 19 }}>
            <HappyPicker onChange={this.pickerChanged} />
          </Col>
          <Col xs={{ span: 5 }}>
            <Button
              onClick={this.handleSubmit}
              type="primary"
              style={{ position: 'absolute', right: 8, top: 4 }}
            >
              Post
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
	page: {
		marginTop: 20,
	},
};

export default NewPost;
