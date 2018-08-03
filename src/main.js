// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import UniversalEvents, {UniversalEventsToken} from 'fusion-plugin-universal-events';
import Redux, {ReduxToken, ReducerToken, EnhancerToken, GetInitialStateToken} from 'fusion-plugin-react-redux';
import RPC, {RPCToken, RPCHandlersToken} from 'fusion-plugin-rpc-redux-react';
import {FetchToken} from 'fusion-tokens';
import {reactorEnhancer} from 'redux-reactors';
import fetch from 'unfetch';

import root from './root.js';
import reducer from './redux/index.js';
import defaultState from './redux/initialState.js';
import handlers from './rpc/index.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(HelmetPlugin);
  app.register(Router);
  app.register(RPCToken, RPC);
  app.register(UniversalEventsToken, UniversalEvents);
  __NODE__
    ? app.register(RPCHandlersToken, handlers)
    : app.register(FetchToken, fetch);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(EnhancerToken, reactorEnhancer);
  __NODE__ && app.register(GetInitialStateToken, defaultState);

  return app;
};
