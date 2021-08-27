import { useEffect, useState } from 'react';

// import { Itodo } from 'Pages/Delete/Delete';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';
import dateFormat from 'Utils/Date';

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
  const [todoItems, setTodoItems] = useState(initialTodos);
  const data = getDataFromLocalStorage('data');

  useEffect(() => {
    loadData();
  }, []);

  // useEffect(() => {
  //   saveDataToLocalStorage('data', todoItems);
  // }, [todoItems]);

  const loadData = () => {
    // const data = getDataFromLocalStorage('data');
    initialTodos = data === null ? [] : data;
    setTodoItems(initialTodos);
  };

  const handleTodoItems = (newTodoItems: Itodo[]) => {
    setTodoItems(newTodoItems);
  };

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
    const currentTodo = data.find((item: Itodo) => item.id === id);
    const currentStatus: string = currentTodo?.status;
    const status: { [key: string]: string } = {
      완료: '시작 안함',
      '시작 안함': '진행중',
      진행중: '완료'
    };
    const updateStatus = status[currentStatus] || '';
    todoItemsStateEdit(id, 'status', updateStatus);
  };

  const editImportance = (id: number) => {
    const currentTodo = data.find((item: Itodo) => item.id === id);
    const currentImportance: string = currentTodo?.importance;
    const importance: { [key: string]: string } = {
      '1': '2',
      '2': '3',
      '3': '1'
    };
    const updateImportance = importance[currentImportance] || '';
    todoItemsStateEdit(id, 'importance', updateImportance);
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
    editDueDateRange,
    handleTodoItems
  };
};

export default useTodoItems;
