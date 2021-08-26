/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-onchange */
import styled from '@emotion/styled';
import SortService from 'Components/Sort/SortService';
import { Itodo } from 'Pages/Delete/Delete';
import React, { useState, useEffect } from 'react';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';
import TodoList from './TodoList';

const TodoSeletedDiv = styled.div`
  height: 10%;
  background-color: #c9c9c9;
`;

const initialTodos: Itodo[] = [];

const TodoContainer = () => {
  const [sortState, setSortState] = useState('basic');
  const [todoItems, setTodoItems] = useState(initialTodos);
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

  const handleTodoItems = (newTodoItems: Itodo[]) => {
    setTodoItems(newTodoItems);
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
      <TodoList todoData={todoItems} handleTodoItems={handleTodoItems} />
    </div>
  );
};

export default TodoContainer;
