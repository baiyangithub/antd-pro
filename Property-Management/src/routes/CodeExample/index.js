import React, { Fragment } from 'react';
// import { connect } from 'dva';
import { Switch, Route } from 'dva/router'
// import { Link } from 'dva/router';
import mdeHtml from './mdeHtml'

const changeRouter = (props) => {
  props.history.replace('/codeDemo/mde-html');
  return null;
}

const CodeExample = () => (<Fragment>
  <Switch>
    <Route exact path="/codeDemo" component={changeRouter} />
    <Route exact path="/codeDemo/mde-html" component={mdeHtml} />
    {/* <Route exact path="/codeDemo" component={Page2} /> */}
  </Switch>
</Fragment>)

export default CodeExample;
