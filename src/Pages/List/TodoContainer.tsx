/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';
import TodoList from './TodoList';

export type Itodo = {
  id: number;
  taskName: string;
  isComplete: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  dueDateRange: string[];
  importance: string;
};

const initialTodos: Itodo[] = [];

function TodoContainer() {
  const [todoItems, setTodoItems] = useState(initialTodos);

  useEffect((): void => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    setTodoItems(data);
  }, []);

  const TodoRender = todoItems.map((r) => <TodoList key={r.id} data={r} />);

  return <div>{TodoRender}</div>;
}

export default TodoContainer;
