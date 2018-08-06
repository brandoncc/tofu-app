import {createPlugin} from 'fusion-core';
import todos from './todos';
import form from './form';
import filter from './filter';

export default createPlugin({
  provides: () => {
    return (state, action) => ({
      todos: todos(state.todos, action),
      form: form(state.form, action),
      filter: filter(state.filter, action),
    });
  }
});
