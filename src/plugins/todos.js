import {createToken, createPlugin} from 'fusion-core';
import {SessionToken} from 'fusion-tokens';

export const TodosToken = createToken('TodosToken');

export default createPlugin({
  deps: {Session: SessionToken},
  provides: ({Session}) => ({
    from (ctx) {
      const session = Session.from(ctx);
      return session.get('todos') || [];
    },
    save (ctx, todos) {
      const session = Session.from(ctx);
      session.set('todos', todos);
    }
  })
});
