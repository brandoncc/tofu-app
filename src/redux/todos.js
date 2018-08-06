import reduceReducers from 'reduce-reducers';
import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';

const create = createRPCReducer('create', {
  start: state => state,
  success: (state = [], action) => {
    return action.payload.todos;
  },
  failure: state => state
});

const toggle = createRPCReducer('toggle', {
  start: state => state,
  success: (state = [], action) => {
    return state.map((todo) => {
      if (todo.id === action.payload.todo.id) {
        return action.payload.todo;
      } else {
        return todo;
      }
    });
  },
  failure: state => state
});

const deleteOne = createRPCReducer('deleteOne', {
  start: state => state,
  success: (_state = [], action) => action.payload.todos,
  failure: state => state
});

const clearCompleted = createRPCReducer('clearCompleted', {
  start: start => start,
  success: (_state = [], action) => action.payload.todos,
  failure: state => state
});

const load = createRPCReducer('loadTodos', {
  start: state => state,
  success: (_state = [], action) => action.payload.todos,
  failure: state => state
});

export default reduceReducers(create, toggle, deleteOne, clearCompleted, load, []);
