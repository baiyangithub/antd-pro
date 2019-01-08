import React, { Component } from 'react';
// import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.scoped.less';

class IndexPage1 extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {

  }
  render() {
    return (
      <div className={styles.normal}>
       <h1 className={styles.title}>Page1</h1>
       <div className={styles.welcome} />
       <ul className={styles.list}>
         {/* <li>To get started, edit <code>src/index.js</code> and save to reload.</li> */}
         {/* <Link to={`/product?${'传参案例'}`}>产品列表</Link> */}
         <Link to={'/product'}>产品列表</Link>
       </ul>
     </div>
    )
  }
}
// IndexPage.propTypes = {
// };

export default IndexPage1;
