import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

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


const NewTodoForm = () => {
  return (
    <Form>
      <FormInput type="text" defaultValue="" placeholder="What do you need to do?" />
    </Form>
  );
};

export default NewTodoForm;
