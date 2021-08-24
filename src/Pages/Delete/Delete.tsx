import React, { useEffect, useState, useCallback } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';

export interface Itodo {
  id: number;
  taskName: string;
  isComplete: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  dueDateRange: string[];
  importance: string;
}

const initialTodos: Itodo[] = [];

export default function Delete() {
  const [todoItems, setTodoItems] = useState(initialTodos);
  const [contentEditMode, setContentEditMode] = useState<boolean>(false);
  const [editedItemId, setEditedItemId] = useState<number>(0);

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

  const handleContentEditClick = (id: number) => {
    setEditedItemId(id);
    setContentEditMode((prev) => !prev);
  };

  const handleStatusEditClick = (id: number) => {};

  const handleImportanceEditClick = (id: number) => {};

  const saveData = useCallback(() => {
    saveDataToLocalStorage('data', todoItems);
  }, [todoItems]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  return (
    <div>
      {todoItems.map(({ id, taskName, status, dueDateRange, importance }) => (
        <div key={id}>
          <div>{id}</div>
          {contentEditMode && id === editedItemId ? (
            <input placeholder="To do what" />
          ) : (
            <div>{taskName}</div>
          )}
          <div>{status}</div>
          <div>{dueDateRange}</div>
          <div>{importance}</div>
          <button type="button" onClick={() => handleDeleteClick(id)}>
            삭제
          </button>
          <button type="button" onClick={() => handleContentEditClick(id)}>
            내용 수정
          </button>
          <button type="button" onClick={() => handleStatusEditClick(id)}>
            상태 수정
          </button>
          <button type="button" onClick={() => handleImportanceEditClick(id)}>
            중요도 수정
          </button>
        </div>
      ))}
    </div>
  );
}
