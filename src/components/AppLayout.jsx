import React from 'react';
import {
  Icon,
  Layout,
  Menu,
} from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Feed from './Feed';
import NewPost from './NewPost';

const { Content, Sider } = Layout;

class AppLayout extends React.Component {
  menuClick = (item) => {
    this.props.changePage(item.key);
  }
  
  render() {
    const menuClick = this.menuClick;
    
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', background: '#ffff'}}>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} onClick={menuClick}>
            <Menu.Item key="NewPost">
              <Icon type="form" />
              <span>New Post</span>
            </Menu.Item>
            <Menu.Item key="Feed">
              <Icon type="global" />
              <span>Feed</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <NewPost />
            <Feed />
            <div>
              <h1>Welcome to My Awesome App</h1>
              <div id="firebaseui-auth-container"></div>
              <div id="loader">Loading...</div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => {
    console.log(page);
    dispatch({ type: 'CHANGE_PAGE', page });
  }
});

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(AppLayout);
