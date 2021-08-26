/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-onchange */
import styled from '@emotion/styled';
import SortService from 'Components/Sort/SortService';
import { Itodo } from 'Pages/Delete/Delete';
import React, { useState, useEffect } from 'react';
import useTodoItems from 'hooks/useTodoItems';
import TodoList from './TodoList';

const TodoSeletedDiv = styled.div`
  height: 10%;
  background-color: #c9c9c9;
`;

const TodoContainer = () => {
  const {
    todoItemsReal,
    setTodoItemsReal,
    deleteTodo,
    editTaskName,
    editStatus,
    editImportance
  } = useTodoItems();

  const [sortState, setSortState] = useState('basic');
  const { fetchData, sortDate, sortImportance } = SortService();

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortState(e.target.value);
  };

  function todoSort(selectName: string) {
    switch (selectName) {
      case 'basic':
        setTodoItemsReal(() => fetchData());
        break;
      case 'Date':
        setTodoItemsReal((current) => sortDate(current));
        break;
      case 'Importance':
        setTodoItemsReal((current) => sortImportance(current));
        break;
      default:
    }
  }

  useEffect(() => {
    todoSort(sortState);
  }, [sortState]);

  const handleTodoItems = (newTodoItems: Itodo[]) => {
    setTodoItemsReal(newTodoItems);
  };

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
        todoData={todoItemsReal}
        handleTodoItems={handleTodoItems}
        enableDrag={sortState === 'basic'}
        deleteTodo={deleteTodo}
        editTaskName={editTaskName}
        editStatus={editStatus}
        editImportance={editImportance}
      />
    </div>
  );
};

export default TodoContainer;
