import { useEffect, useState } from 'react';

import { Itodo } from 'Pages/Delete/Delete';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';

const initialTodos: Itodo[] = [];

const useTodoItems = () => {
  const [todoItemsReal, setTodoItemsReal] = useState(initialTodos);

  useEffect(() => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    setTodoItemsReal(data);
  }, []);

  const todoItemsStateEdit = (
    id: number,
    element: string,
    content: string | number
  ) => {
    const editedData = todoItemsReal.map((item) =>
      item.id === id ? { ...item, [element]: content } : item
    );
    setTodoItemsReal(editedData);
    saveDataToLocalStorage('data', editedData);
  };

  const deleteTodo = (id: number) => {
    const leftData = todoItemsReal.filter((item) => item.id !== id);
    setTodoItemsReal(leftData);
    saveDataToLocalStorage('data', leftData);
  };

  const editTaskName = (id: number, newTaskName: string) => {
    if (newTaskName.length > 0) todoItemsStateEdit(id, 'taskName', newTaskName);
  };

  const editStatus = (id: number) => {
    const currentTodo = todoItemsReal.find((item) => item.id === id);

    if (currentTodo?.status === '완료') {
      todoItemsStateEdit(id, 'status', '시작 안함');
    } else if (currentTodo?.status === '시작 안함') {
      todoItemsStateEdit(id, 'status', '진행중');
    } else {
      todoItemsStateEdit(id, 'status', '완료');
    }
  };

  const editImportance = (id: number) => {
    const currentTodo = todoItemsReal.find((item) => item.id === id);

    if (currentTodo?.importance === '1') {
      todoItemsStateEdit(id, 'importance', '2');
    } else if (currentTodo?.importance === '2') {
      todoItemsStateEdit(id, 'importance', '3');
    } else {
      todoItemsStateEdit(id, 'importance', '1');
    }
  };

  return {
    todoItemsReal,
    setTodoItemsReal,
    deleteTodo,
    editTaskName,
    editStatus,
    editImportance
  };
};

export default useTodoItems;
