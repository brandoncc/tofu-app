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


class NewTodoForm extends React.Component {
  state = {
    inputValue: ""
  };

  handleSubmit = (e, handler) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    handler({title: this.state.inputValue});
  }

  // If the api call doesn't come back before we submit, we lose the last
  // character entered. By using the state in tandem we guarantee that won't
  // happen.
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    }, () => {
      this.props.changeNewTitle({title: this.state.inputValue})
    });
  }

  render () {
    const {create, changeNewTitle, form} = this.props;

    return (
      <Form onSubmit={(e) => {this.handleSubmit(e, create)}}>
        <FormInput
          type="text"
          value={form}
          onChange={this.handleChange}
          placeholder="What do you need to do?"
        />
      </Form>
    );
  }
}

const hoc = compose(
  withRPCRedux('create'),
  withRPCRedux('changeNewTitle'),
  connect(({form}) => ({form}))
);
export default hoc(NewTodoForm);
