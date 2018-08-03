import {withRPCReactor} from 'fusion-plugin-rpc-redux-react';

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
