// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(HelmetPlugin);
  app.register(Router);
  return app;
};
