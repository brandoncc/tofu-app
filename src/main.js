// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import UniversalEvents, {UniversalEventsToken} from 'fusion-plugin-universal-events';
import Redux, {ReduxToken, ReducerToken, GetInitialStateToken} from 'fusion-plugin-react-redux';
import RPC, {RPCToken, RPCHandlersToken} from 'fusion-plugin-rpc-redux-react';
import {FetchToken, SessionToken} from 'fusion-tokens';
import fetch from 'unfetch';
import JWTSession, {
  SessionSecretToken,
  SessionCookieNameToken,
  SessionCookieExpiresToken
} from 'fusion-plugin-jwt';

import root from './root.js';
import reducer from './redux/index.js';
import initialState from './redux/initialTodoState.js';
import handlers from './rpc/index.js';
import Todos, {TodosToken} from './plugins/todos';

import session from './plugins/session';

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
  if (__NODE__) {
    app.register(SessionToken, JWTSession);
    app.register(SessionSecretToken, 'some-secret'); // required
    app.register(SessionCookieNameToken, 'some-cookie-name'); // required
    app.register(SessionCookieExpiresToken, 86400); // optional
    app.register(session);
    app.register(TodosToken, Todos);
  }

  __NODE__ && app.register(GetInitialStateToken, initialState);

  return app;
};
