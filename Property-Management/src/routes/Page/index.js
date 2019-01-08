import React, { Component } from 'react';
// import { connect } from 'dva';
import { List, Card } from 'antd';
import { Link } from 'dva/router';
import styles from './index.scoped.less';

class IndexPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {

  }

  fenbianlv() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const html = document.querySelector('html')
    console.log(height/width)
    // alert('width'+width+'px')
    // alert('height:'+height+'px')
    html.style.fontSize = width / 16 + "px";
    console.log(html.style.fontSize)
  }

  renderNavList() {
    const data = [
      {
        title: '将markdown转换为html并展示于页面上',
        link: '/codeDemo/mde-html'
      },
      {
        title: 'Title 2',
        link: '/codeDemo/mde-html'
      },
      {
        title: 'Title 3',
        link: '/codeDemo/mde-html'
      },
      {
        title: 'Title 4',
        link: '/codeDemo/mde-html'
      },
      {
        title: 'Title 5',
        link: '/codeDemo/mde-html'
      },
      {
        title: 'Title 6',
        link: '/codeDemo/mde-html'
      },
    ];
    return (
      <List
        grid={{
          gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>
              <Link to={item.link} >{item.title}</Link>
            </Card>
          </List.Item>
        )}
      />
    )
  }

  render() {
    return (
      <div className={styles.normal}>
       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
       <div className={styles.welcome} />
       <ul className={styles.list}>
         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
         {/* <Link to={`/product?${'传参案例'}`}>产品列表</Link> */}
         <Link to={'/product'}>产品列表</Link><br />
         {/* <button onClick={ () => {this.fenbianlv()}}></button> */}
       </ul>
       <div className={styles.navlist}>
          {this.renderNavList()}
       </div>
     </div>
    )
  }
}
// IndexPage.propTypes = {
// };

export default IndexPage;
