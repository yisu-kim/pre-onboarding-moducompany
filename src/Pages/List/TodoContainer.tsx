/* eslint-disable jsx-a11y/no-onchange */
import styled from '@emotion/styled';
import SortService from 'Components/Sort/SortService';
import React, { useState, useEffect, useCallback } from 'react';
import useTodoItems, { Itodo } from 'hooks/useTodoItems';
import TodoList from './TodoList';

const TodoSelectedDiv = styled.div`
  height: 10%;
  background-color: #c9c9c9;
`;

const TodoContainer = () => {
  const {
    todoItems,
    deleteTodo,
    editTaskName,
    editStatus,
    editImportance,
    editDueDateRange,
    handleTodoItems
  } = useTodoItems();

  const [sortState, setSortState] = useState('basic');
  const [sortedItems, setSortedItems] = useState<Itodo[]>([]);
  const { sortDate, sortImportance } = SortService();
  const [isBasic, setIsBasic] = useState<boolean>(sortState === 'basic');

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortState(e.target.value);
  };

  const todoSort = useCallback((selectName: string): Itodo[] => {
    switch (selectName) {
      case 'Date':
        return sortDate(todoItems);
      case 'Importance':
        return sortImportance(todoItems);
      default:
        return todoItems;
    }
  }, []);

  useEffect(() => {
    if (sortState === 'basic') {
      setIsBasic(true);
    } else {
      setIsBasic(false);
    }

    const sorted = todoSort(sortState);
    setSortedItems(sorted);
  }, [sortState, todoSort]);

  return (
    <div>
      <TodoSelectedDiv>
        <select onChange={sortChange} value={sortState}>
          <option value="basic">기본정렬</option>
          <option value="Date">생성일순</option>
          <option value="Importance">중요도순</option>
        </select>
      </TodoSelectedDiv>
      <TodoList
        todoItems={isBasic ? todoItems : sortedItems}
        deleteTodo={deleteTodo}
        editTaskName={editTaskName}
        editStatus={editStatus}
        editImportance={editImportance}
        editDueDateRange={editDueDateRange}
        handleTodoItems={handleTodoItems}
        enableDrag={isBasic}
      />
    </div>
  );
};

export default TodoContainer;
