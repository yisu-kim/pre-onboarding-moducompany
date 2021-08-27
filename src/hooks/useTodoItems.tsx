import { useEffect, useState } from 'react';

import { Itodo } from 'Pages/Delete/Delete';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';
import dateFormat from 'Utils/Date';

const initialTodos: Itodo[] = [];

const useTodoItems = () => {
  const [todoItems, setTodoItems] = useState(initialTodos);

  useEffect(() => {
    const data = getDataFromLocalStorage('data');
    setTodoItems(data);
  }, []);

  const todoItemsStateEdit = (
    id: number,
    element: string,
    content: string | number | string[]
  ) => {
    const editedData = todoItems.map((item) =>
      item.id === id ? { ...item, [element]: content } : item
    );
    setTodoItems(editedData);
    saveDataToLocalStorage('data', editedData);
  };

  const deleteTodo = (id: number) => {
    const leftData = todoItems.filter((item) => item.id !== id);
    setTodoItems(leftData);
    saveDataToLocalStorage('data', leftData);
  };

  const editTaskName = (id: number, newTaskName: string) => {
    if (newTaskName.length > 0) todoItemsStateEdit(id, 'taskName', newTaskName);
  };

  const editStatus = (id: number) => {
    const currentTodo = todoItems.find((item) => item.id === id);

    if (currentTodo?.status === '완료') {
      todoItemsStateEdit(id, 'status', '시작 안함');
    } else if (currentTodo?.status === '시작 안함') {
      todoItemsStateEdit(id, 'status', '진행중');
    } else {
      todoItemsStateEdit(id, 'status', '완료');
    }
  };

  const editImportance = (id: number) => {
    const currentTodo = todoItems.find((item) => item.id === id);

    if (currentTodo?.importance === '1') {
      todoItemsStateEdit(id, 'importance', '2');
    } else if (currentTodo?.importance === '2') {
      todoItemsStateEdit(id, 'importance', '3');
    } else {
      todoItemsStateEdit(id, 'importance', '1');
    }
  };

  const editDueDateRange = (id: number, value: Date[] | null) => {
    if (value !== null) {
      const parsedDueDateRange = [
        dateFormat({ targetDate: value[0] }),
        dateFormat({ targetDate: value[1] })
      ];
      todoItemsStateEdit(id, 'dueDateRange', parsedDueDateRange);
    }
  };

  return {
    todoItems,
    setTodoItems,
    deleteTodo,
    editTaskName,
    editStatus,
    editImportance,
    editDueDateRange
  };
};

export default useTodoItems;
