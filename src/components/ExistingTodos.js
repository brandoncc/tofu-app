import React from 'react';

import {styled, withStyleDeep} from 'fusion-plugin-styletron-react';
import {connect} from 'react-redux';

const List = styled('ul', {
  padding: 0,
  margin: 0,
  width: '100%'
});

const ListItem = styled('li', {
  margin: 0,
  padding: '15px 10px 15px 40px',
  listStyleType: 'none',
  borderTop: '1px solid black',
  fontSize: '18px',
  fontFamily: "'Montserrat', sans-serif",
  cursor: 'pointer',
  position: 'relative',
  ':before': {
    content: '"\u2714"',
    display: 'block',
    fontSize: '2em',
    position: 'absolute',
    top: 0,
    left: '10px',
    color: 'rgba(0, 0, 0, 0.1)'
  }
});

const IncompleteListItem = withStyleDeep(ListItem, {
  ':before': {
    color: 'rgba(0, 0, 0, 0.1)'
  }
});

const CompletedListItem = withStyleDeep(ListItem, {
  ':before': {
    color: 'rgba(0, 0, 0, 0.5)'
  }
});

const listItems = (items) => {
  return items.map((item, index) => {
    const Component = item.completed ? CompletedListItem : IncompleteListItem;
    return <Component key={item.id}>{item.title}</Component>;
  });
}

const ExistingTodos = ({todos}) => {
  return (
    <List>{listItems(todos)}</List>
  );
};

export default connect(({todos}) => ({todos}))(ExistingTodos);
