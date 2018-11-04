import React from 'react';
import {
  Button,
  Icon,
  Layout,
  Menu,
  Avatar,
} from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import GlobalFeed from './GlobalFeed';
import UserProfile from './UserProfile';
import NewPost from './NewPost';

const { Content, Sider } = Layout;

class AppLayout extends React.Component {
  menuClick = (item) => {
    this.props.changePage(item.key);
  }

  render() {
    const menuClick = this.menuClick;
    const currentPage = ((pageType) => {
      switch(pageType) {
        case 'NewPost':
          return <NewPost />;
        case 'GlobalFeed':
          return <GlobalFeed />;
        case 'UserProfile':
          return <UserProfile />;
      }
    })(this.props.currentPage);

    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', background: '#ffff', position: 'fixed' }}>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} onClick={menuClick}>
            <Menu.Item key="NewPost">
              <Icon type="form" />
              <span>New Post</span>
            </Menu.Item>
            <Menu.Item key="GlobalFeed">
              <Icon type="global" />
              <span>Global Feed</span>
            </Menu.Item>
            <Menu.Item key="UserProfile">
              <Icon type="user" />
              <span>Your Profile</span>
            </Menu.Item>
            <img style={{ position: "absolute", paddingLeft: 30, bottom: 25 }} src={"https://live.calhacks.io/assets/images/home_1.png"}/>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ marginLeft: 210 }}>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
            {currentPage}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => {
    dispatch({ type: 'CHANGE_PAGE', page });
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AppLayout);
