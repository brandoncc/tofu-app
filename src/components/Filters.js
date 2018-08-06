import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {all, incomplete, completed} from '../selectors/todos';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';

const FiltersContainer = styled('div', {
  borderTop: '1px solid black',
  padding: '7px 12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 574px)': {
    flexDirection: 'column'
  }
});

const IncompleteCount = styled('div', {});

const FilterSelector = styled('div', {});

const ClearCompleteLink = styled('div', {
  cursor: 'pointer',
  display: 'inline-block'
});

const ContainerSection = styled('div', ({$align}) => ({
  '@media (min-width: 575px)': {
    width: 'calc(100% / 3)',
    textAlign: $align || 'left'
  },
}));

const FilterTypes = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '175px'
});

const FilterType = styled('span', ({$selected}) => ({
  border: $selected ? '1px solid gray' : '1px solid transparent',
  padding: '2px 3px',
  cursor: 'pointer',
  ':hover': {
    border: $selected ? '1px solid gray' : '1px solid lightgray',
  }
}));

const handleFilterChange = (e, handler) => {
  const newFilter = e.target.innerText;
  handler({filter: newFilter});
}

const Filters = ({allCount, incompleteCount, completeCount, clearCompleted, chooseFilter, activeFilter}) => {
  if (allCount === 0) return null;

  return (
    <FiltersContainer>
      <ContainerSection>
        <IncompleteCount>{incompleteCount} items left</IncompleteCount>
      </ContainerSection>

      <ContainerSection $align="center">
        <FilterSelector>
          <FilterTypes>
            {
              ['All', 'Active', 'Completed'].map((filter) => {
                return (
                  <FilterType
                    onClick={(e) => handleFilterChange(e, chooseFilter)}
                    $selected={activeFilter === filter}
                    key={filter}
                  >{filter}</FilterType>
                );
              })
            }
          </FilterTypes>
        </FilterSelector>
      </ContainerSection>

      <ContainerSection $align="right">
        {
          completeCount > 0
            ? <ClearCompleteLink onClick={() => clearCompleted()}>Clear completed</ClearCompleteLink>
            : null
        }
      </ContainerSection>
    </FiltersContainer>
  );
};

const hoc = compose(
  withRPCRedux('clearCompleted'),
  withRPCRedux('chooseFilter'),
  connect(
    (state) => ({
      allCount: all(state).length,
      incompleteCount: incomplete(state).length,
      completeCount: completed(state).length,
      activeFilter: state.filter
    })
  )
);

export default hoc(Filters);
