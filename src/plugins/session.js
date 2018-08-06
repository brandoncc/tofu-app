import {SessionToken} from 'fusion-tokens';
import {createPlugin} from 'fusion-core';

export default createPlugin({
  deps: {Session: SessionToken},
  middleware({Session}) {
    return (ctx, next) => {
      const session = Session.from(ctx);
      ctx.session = session;
      return next();
    }
  }
});
