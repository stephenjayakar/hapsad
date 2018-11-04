import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { readAllPosts } from '../index';
import TimeAgo from 'timeago-react';
import PostCell from './PostCell';
let keywordExtractor = require("keyword-extractor");


class Similarities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    readAllPosts().then((posts) => {
      this.setState({ posts });
    });
  }

  render() {
    const posts = this.state.posts;
    const emotion = this.props.emotion;
    const value = this.props.value;
    const results = posts.filter((post) => {
      return (post.score === emotion);
    }).filter((post) => {
      const keywords = keywordExtractor.extract(value, {
        language: 'english',
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: true,
        return_chained_words: true
      });
      let matches = 0;
      let i;
      for (i in keywords) {
        console.log(keywords[i], post.keywords);
        if (post.keywords != undefined && post.keywords.includes(keywords[i])) {
          matches += 1;
        }
      }
      return (matches >= keywords.length / 2);
    }).map((post) => (
      <PostCell
        text={post.text}
        userId={post.name}
        timestamp={<TimeAgo datetime={post.timestamp} />}
        emotion={scoreToEmoji(post.score)}
      />
    ));
    return (
      <div>
        <p>Here are {results.length} similar posts</p>
        {results}
      </div>
    );
  }
}


const scoreToEmoji = (score) => {
  switch (score) {
    case 'a':
      return '😢';
    case 'b':
      return '🙁';
    case 'c':
      return '🙂';
    case 'd':
      return '😁';
    default:
      return score;
  }
}

const styles = {
  page: {
    marginTop: 20,
  },
};


const mapStateToProps = (state) => ({
  posts: state.posts,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(Similarities);
