import React, { useEffect, useState, useCallback } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';

export type Itodo = {
  id: number;
  taskName: string;
  isComplete: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  dueDateRange: string[];
  importance: number;
};

const initialTodos: Itodo[] = [];

export default function Delete() {
  const [todoItems, setTodoItems] = useState(initialTodos);

  useEffect((): void => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    setTodoItems(data);
  }, []);

  const handleDeleteClick = (id: number) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  const saveData = useCallback(() => {
    saveDataToLocalStorage('data', todoItems);
  }, [todoItems]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  return (
    <div>
      {todoItems.map(({ id, taskName }) => (
        <div key={id}>
          <div>{id}</div>
          <div>{taskName}</div>
          <input type="button" onClick={() => handleDeleteClick(id)} />
        </div>
      ))}
    </div>
  );
}
