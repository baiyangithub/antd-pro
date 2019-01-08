import React from 'react'
import { Switch, Route, Link } from 'dva/router'
import { Layout, Menu, Icon } from 'antd';
// import userAvatar from '../../../public/image/dva.png'
import Home from '../Page'
import Product from '../Product'
import Route4 from '../Route4'
import demo from '../CodeExample'
import styles from './index.scoped.less';

const { Header, Content, Footer, Sider } = Layout;
// const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header" style={{ height: '50px' }}>
          <div style={{ height: '50px' }}>
            <h1 className={styles.titleH1}>Ant Design Pro</h1>
            <div className={styles.username}>
              <a className={styles.usernameA} href="https://github.com">
                <img className={styles.userAvatar} src="../../../public/image/dva.png" />
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>白白</span>
              </a>
            </div>
          </div>

        </Header>
        <Layout style={{ backgroundColor: '#eaedf1' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>
                  <Link style={{ color: '#fff' }} to="/codeDemo/mde-html" >markdown</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>
                  <Link style={{ color: '#fff' }} to="/" >Home</Link>
                </span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/page" component={Route4} />
                <Route path="/codeDemo" component={demo} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
// const App = () => (
//     <div className="router-wrap">
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/product" component={Product} />
//         <Route path="/page" component={Route4} />
//         <Route path="/codeDemo" component={demo} />
//       </Switch>
//     </div>
// )

export default App
