import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';

const Form = styled('form', {
  padding: '20px 15px',
});

const FormInput = styled('input', {
  border: 'none',
  fontSize: '1.5em',
  boxSizing: 'border-box',
  width: '100%',
  fontFamily: "'Shadows Into Light', cursive"
});

const handleSubmit = (e, handler) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  handler({title: input.value});
}


const NewTodoForm = ({newTitle, create, changeNewTitle}) => {
  return (
    <Form onSubmit={(e) => {handleSubmit(e, create)}}>
      <FormInput
        type="text"
        value={newTitle}
        onChange={(e) => changeNewTitle({title: e.target.value})}
        placeholder="What do you need to do?"
      />
    </Form>
  );
};

const hoc = compose(
  withRPCRedux('create'),
  withRPCRedux('changeNewTitle'),
  connect(({form}) => ({form}))
);
export default hoc(NewTodoForm);
