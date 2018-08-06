import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';

const choose = createRPCReducer('chooseFilter', {
  start: state => state,
  success: (_state, action) => action.payload.filter,
  failure: state => state
});

export default reduceReducers(choose, "All");
