import React from 'react';
import {
  Radio,
} from 'antd';

export default class HappyPicker extends React.Component {
  render() {
    const onChange = this.props.onChange;

    return (
      <div>
    	<Radio.Group
    	  onChange={onChange}
    	  defaultValue='d'
    	  size="large"
    	>
    	  <RadioButton value='a' text='😥'></RadioButton>
    	  <RadioButton value='b' text='🙁'></RadioButton>
    	  <RadioButton value='c' text='🙂'></RadioButton>
    	  <RadioButton value='d' teext='😁'></RadioButton>
    	</Radio.Group>
      </div>
    );
  }
}

class RadioButton extends React.Component {
  render() {
    const { value, text } = this.props;
    return (
      <RadioButton value={value} style={styles.button}>{text}</RadioButton>
    );
  }
}

const styles = {
  button: {
    fontSize: 30,
  },
};
