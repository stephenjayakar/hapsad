import React, { Component } from 'react';
import {
  Button,
  Input,
  Row,
  Col,
} from 'antd';

import HappyPicker from './HappyPicker';
import Similarities from './Similarities';
import { insertPost, readUserPosts, readAllPosts } from '../index.js';
let keywordExtractor = require("keyword-extractor");


class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      emotion: 'd',
      similarPosts: [],
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
    console.log("AGAGAHGAWHGAHG");
    const similarPosts = <Similarities value={value} emotion={emotion} />
    console.log({ similarPosts });
    this.setState({ value: "", similarPosts });
    const extractionResult = keywordExtractor.extract(value, {
      language: 'english',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
      return_chained_words: true
    });
    insertPost(value, emotion, extractionResult);
  }

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
        {this.state.similarPosts}
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
