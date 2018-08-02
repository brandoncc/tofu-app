import React from 'react';

import {styled, withStyleDeep} from 'fusion-plugin-styletron-react';

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

const items = [
  { id: 0, title: 'Go grocery shopping', completed: false },
  { id: 1, title: 'Wash the car', completed: true },
  { id: 2, title: 'Clean my room', completed: false },
];

const listItems = (items) => {
  return items.map((item, index) => {
    const Component = item.completed ? CompletedListItem : IncompleteListItem;
    return <Component key={item.id}>{item.title}</Component>;
  });
}

const ExistingTodos = () => {
  return (
    <List>{listItems(items)}</List>
  );
};

export default ExistingTodos;
