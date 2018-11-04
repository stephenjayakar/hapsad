import React from 'react';
import {
  Card,
} from 'antd';

// TODO: How do I define proptypes correctly again?
/* Props
- text
- userId
- timestamp
- emotion
*/

export default class PostCell extends React.Component {
  render() {
    const { text, userId, timestamp, emotion } = this.props;
    return (
      <Card
        title={emotion + ' ' + userId}
        extra={timestamp}
      >
        <p>{text}</p>
      </Card>
    );
  }
}
