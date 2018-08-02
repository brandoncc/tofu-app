// @flow
import React from 'react';

import {Route, Switch} from 'fusion-plugin-react-router';

import Index from './pages/index.js';
import PageNotFound from './pages/pageNotFound.js';

const root = (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route component={PageNotFound} />
  </Switch>
);
export default root;
