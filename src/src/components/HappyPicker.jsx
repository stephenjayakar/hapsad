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
	  <Radio.Button value='a'>Very Sad</Radio.Button>
	  <Radio.Button value='b'>Kinda Sad</Radio.Button>
	  <Radio.Button value='c'>Happy</Radio.Button>
	  <Radio.Button value='d'>Ecstatic</Radio.Button>
	</Radio.Group>
      </div>
    );
  }
}
