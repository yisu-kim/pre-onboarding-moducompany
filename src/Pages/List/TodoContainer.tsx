/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-onchange */
import styled from '@emotion/styled';
import SortService from 'Components/Sort/SortService';
import React, { useState, useEffect } from 'react';
import useTodoItems from 'hooks/useTodoItems';
import TodoList from './TodoList';

const TodoSeletedDiv = styled.div`
  height: 10%;
  background-color: #c9c9c9;
`;

const TodoContainer = () => {
  const {
    todoItems,
    setTodoItems,
    deleteTodo,
    editTaskName,
    editStatus,
    editImportance,
    editDueDateRange
  } = useTodoItems();

  const [sortState, setSortState] = useState('basic');
  const { fetchData, sortDate, sortImportance } = SortService();

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortState(e.target.value);
  };

  function todoSort(selectName: string) {
    switch (selectName) {
      case 'basic':
        setTodoItems(() => fetchData());
        break;
      case 'Date':
        setTodoItems((current) => sortDate(current));
        break;
      case 'Importance':
        setTodoItems((current) => sortImportance(current));
        break;
      default:
    }
  }

  useEffect(() => {
    todoSort(sortState);
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
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        enableDrag={sortState === 'basic'}
        deleteTodo={deleteTodo}
        editTaskName={editTaskName}
        editStatus={editStatus}
        editImportance={editImportance}
        editDueDateRange={editDueDateRange}
      />
    </div>
  );
};

export default TodoContainer;
