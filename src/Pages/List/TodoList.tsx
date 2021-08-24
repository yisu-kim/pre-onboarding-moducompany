import styled from '@emotion/styled';
import { Itodo } from 'Pages/Delete/Delete';
import { useEffect, useState } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';
import TodoItem from './TodoItem';

const initialTodos: Itodo[] = [];

const TodoItemDiv = styled.div`
  width: 100%;
  padding: 10px;
`;

function TodoList() {
  const [todoItems, setTodoItems] = useState(initialTodos);

  useEffect((): void => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    setTodoItems(data);
  }, []);

  return (
    <TodoItemDiv>
      {todoItems.map((r) => (
        <TodoItem key={r.id} data={r} />
      ))}
    </TodoItemDiv>
  );
}

export default TodoList;
