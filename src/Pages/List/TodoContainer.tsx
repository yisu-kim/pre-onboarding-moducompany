/* eslint-disable jsx-a11y/no-onchange */
import styled from '@emotion/styled';
import SortService from 'Components/Sort/SortService';
import useTodoItems, { Itodo } from 'hooks/useTodoItems';
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const TodoSeletedDiv = styled.div`
  height: 10%;
  background-color: #c9c9c9;
`;

const TodoContainer = () => {
  const { todoItems, handleTodoItems } = useTodoItems();
  const [sortState, setSortState] = useState('basic');
  const { fetchData, sortDate, sortImportance } = SortService();

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortState(e.target.value);
  };

  function todoSort(selectName: string): Itodo[] {
    switch (selectName) {
      case 'basic':
        return fetchData();
      case 'Date':
        return sortDate(todoItems);
      case 'Importance':
        return sortImportance(todoItems);
      default:
        return [];
    }
  }

  useEffect(() => {
    const sorted = todoSort(sortState);
    handleTodoItems(sorted);
  }, [sortState]);

  return (
    <div>
      <TodoSeletedDiv>
        <select onChange={sortChange} value={sortState}>
          <option value="basic">기본정렬</option>
          <option value="Date">생성일순</option>
          <option value="Importance">중요도순</option>
        </select>
      </TodoSeletedDiv>
      <TodoList
        todoData={todoItems}
        handleTodoItems={handleTodoItems}
        enableDrag={sortState === 'basic'}
      />
    </div>
  );
};

export default TodoContainer;
