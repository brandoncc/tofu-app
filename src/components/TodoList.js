import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';

import NewTodoForm from '../components/NewTodoForm';
import ExistingTodos from '../components/ExistingTodos';

const Frame = styled('div', {
  width: '400px',
  maxWidth: '100%',
  border: '1px solid black'
});

const TodoList = () => {
  return (
    <Frame>
      <NewTodoForm />
      <ExistingTodos />
    </Frame>
  );
};

export default TodoList;
