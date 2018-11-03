import React from 'react';
import {
  Radio,
} from 'antd';

// TODO: Add emoji support
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
	  <Radio.Button value='a'>Very Sad</Radio.Button>
	  <Radio.Button value='b'>Sad</Radio.Button>
	  <Radio.Button value='c'>Happy</Radio.Button>
	  <Radio.Button value='d'>Very Happy</Radio.Button>
	</Radio.Group>
      </div>
    );
  }
}

class RadioButton extends React.Component {
  render() {
    const { value, text } = this.props;
    return (
      <RadioButton value={value} style={styles.button}>
        {text}
      </RadioButton>
    );
  }
}

const styles = {
  button: {
    fontSize: 30,
  },
};
