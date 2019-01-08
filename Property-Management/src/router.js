import React from 'react';
import { Router, Route } from 'dva/router';
import PropTypes from 'prop-types'
// import Page from './routes/Page';
import App from './routes/App';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {/* <Switch> */}
        <Route path="/" component={App} />
      {/* </Switch> */}
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}

export default RouterConfig;
