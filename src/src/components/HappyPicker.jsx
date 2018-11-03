import React from 'react';
import {
  Radio,
} from 'antd';

export default class HappyPicker extends React.Component {
  render() {
    const onChange = this.props.onChange;

    return (
      <div>
	<Radio.Group onChange={onChange} defaultValue='d'>
	  <Radio.Button value='a'>😥</Radio.Button>
	  <Radio.Button value='b'>🙁</Radio.Button>
	  <Radio.Button value='c'>🙂</Radio.Button>
	  <Radio.Button value='d'>😁</Radio.Button>
	</Radio.Group>
      </div>
    );
  }
}
