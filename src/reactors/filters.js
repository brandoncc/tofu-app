import {withRPCReactor, withRPCRedux} from 'fusion-plugin-rpc-redux-react';

export const chooseReactor = withRPCReactor('chooseFilter', {
  start: state => state,
  success: (state, action) => {
    return {...state, activeFilter: action.payload.filter};
  },
  failure: state => state
});
