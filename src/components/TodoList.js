import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';

import NewTodoForm from '../components/NewTodoForm';
import ExistingTodos from '../components/ExistingTodos';
import Filters from '../components/Filters';

const Frame = styled('div', {
  width: '600px',
  maxWidth: '100%',
  border: '1px solid black'
});

const TodoList = () => {
  return (
    <Frame>
      <NewTodoForm />
      <ExistingTodos />
      <Filters />
    </Frame>
  );
};

export default TodoList;
