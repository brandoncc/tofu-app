import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';

const change = createRPCReducer('changeNewTitle', {
  start: state => state,
  success: (_state, action) => action.payload.title,
  failure: state => state
});

const create = createRPCReducer('create', {
  start: state => state,
  success: () => "",
  failure: state => state
});

export default reduceReducers((state = "") => state, create, change);
