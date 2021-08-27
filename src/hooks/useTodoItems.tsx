import { useEffect, useState } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';

export type Itodo = {
  id: number;
  taskName: string;
  isComplete: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  dueDateRange: Date[];
  importance: string;
};

let initialTodos: Itodo[] = [];

const useTodoItems = () => {
  const [todoItems, setTodoItems] = useState<Itodo[]>(initialTodos);

  useEffect(() => {
    /* ---- Dummy Data ---- */
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => {
        saveDataToLocalStorage('data', data);
      })
      .then(() => loadData());

    /* ---- Real Data ---- */
    // loadData();
  }, []);

  useEffect(() => {
    saveDataToLocalStorage('data', todoItems);
  }, [todoItems]);

  const loadData = () => {
    const data = getDataFromLocalStorage('data');
    initialTodos = data === null ? [] : data;
    setTodoItems(initialTodos);
  };

  const handleTodoItems = (newTodoItems: Itodo[]) => {
    setTodoItems(newTodoItems);
  };

  return {
    todoItems,
    handleTodoItems
  };
};

export default useTodoItems;
