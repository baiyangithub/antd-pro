import React, { Fragment } from 'react';
// import { connect } from 'dva';
import { Switch, Route } from 'dva/router'
// import { Link } from 'dva/router';
import Page1 from './Page1';
import Page2 from './Page2'

const changeRouter = (props) => {
  props.history.replace('/page/page1');
  return null;
}

const Page = () => (<Fragment>
  <Switch>
    <Route exact path="/page" component={changeRouter} />
    <Route exact path="/page/page1" component={Page1} />
    <Route exact path="/page/page2" component={Page2} />
  </Switch>
</Fragment>)

export default Page;
