import React from 'react';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';
const { Sider } = Layout;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    };
  }

  handleClick = (e) => {
    console.log('click ', e.target.value);
  }

  render() {
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', background: '#ffff', position: 'fixed', left: 0}}>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="form" />
            <span>New Post</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="global" />
            <span>Feed</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;