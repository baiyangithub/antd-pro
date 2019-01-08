import React from 'react'
import { Switch, Route, Link } from 'dva/router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Home from '../Page'
import Product from '../Product'
import Route4 from '../Route4'
import demo from '../CodeExample'
import styles from './index.scoped.less';

const { Header, Content, Footer, Sider } = Layout;
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
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div style={{ height: '60px' }}>
            <h1 className={styles.titleH1}>Ant Design Pro</h1>
          </div>
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
