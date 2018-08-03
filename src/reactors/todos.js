import {withRPCReactor, withRPCRedux} from 'fusion-plugin-rpc-redux-react';

export const createReactor = withRPCReactor('create', {
  start: state => state,
  success: (state, action) => {
    try {
      const {id, title} = action.payload;
      const todos = [
        ...(state.todos || []),
        {id, title, completed: false}
      ];

      return {...state, todos, newTitle: ''};
    } catch (e) {
      console.log(e.message);
    }
  },
  failure: state => state
});

export const toggleReactor = withRPCReactor('toggle', {
  start: state => state,
  success: (state, action) => {
    const todos = state.todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return {...todo, completed: !todo.completed};
      } else {
        return todo;
      }
    });

    return {...state, todos};
  },
  failure: state => state
});

export const deleteReactor = withRPCReactor('deleteOne', {
  start: state => state,
  success: (state, action) => {
    const todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    return {...state, todos};
  },
  failure: state => state
});

export const clearCompletedReactor = withRPCReactor('clearCompleted', {
  start: start => start,
  success: (state, _action) => {
    const todos = state.todos.filter((todo) => !todo.completed);
    return {...state, todos};
  },
  failure: state => state
});
