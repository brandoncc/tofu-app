import {createPlugin} from 'fusion-core';
import {TodosToken} from '../plugins/todos';

export default createPlugin({
  deps: {Todos: TodosToken},
  provides: ({Todos}) => {
    return async (ctx) => ({
      todos: Todos.from(ctx)
    })
  }
});
