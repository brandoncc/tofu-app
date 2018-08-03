import {withRPCReactor} from 'fusion-plugin-rpc-redux-react';

export const newTitleReactor = withRPCReactor('changeNewTitle', {
  start: state => state,
  success: (state, action) => {
    return {...state, newTitle: action.payload.title};
  },
  failure: state => state
});
