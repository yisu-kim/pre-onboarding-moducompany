import { useEffect, useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';

export interface Itodo {
  id: number;
  taskName: string;
  isComplete: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  dueDateRange: Date[];
  importance: string;
}

const initialTodos: Itodo[] = [];

export default function Delete() {
  const [todoItems, setTodoItems] = useState(initialTodos);
  const [contentEditMode, setContentEditMode] = useState<boolean>(false);
  const [editedItemId, setEditedItemId] = useState<number>(0);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect((): void => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));
    const data = getDataFromLocalStorage('data');
    setTodoItems(data);
  }, []);

  const todoItemsStateEdit = (
    id: number,
    element: string,
    content: string | number
  ) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [element]: content } : item
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleTaskNameEditClick = (id: number) => {
    setEditedItemId(id);
    setContentEditMode(true);
  };

  const handleEndTaskNameEditClick = (id: number) => {
    const newTaskName = inputEl.current?.value || '';
    if (newTaskName.length > 0) todoItemsStateEdit(id, 'taskName', newTaskName);

    setContentEditMode(false);
  };

  // const handleImportanceEditClick = (id: number) => {};

  // const handleStatusEditClick = (id: number) => {
  //   const currentStatus =
  //     todoItems.find((item) => item.id === id) || todoItems[id + 1];
  //   statusEdit(id, currentStatus);
  // };

  const handleEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === 'Enter') {
      handleEndTaskNameEditClick(id);
    }
  };

  const handleStatusEditClick = (id: number) => {
    const current =
      todoItems.find((item) => item.id === id) || todoItems[id + 1];
    statusEdit(id, current);
  };

  const statusEdit = (id: number, currentStatus: Itodo) => {
    if (currentStatus.status === '완료') {
      todoItemsStateEdit(id, 'status', '시작 안함');
    } else if (currentStatus.status === '시작 안함') {
      todoItemsStateEdit(id, 'status', '진행중');
    } else {
      todoItemsStateEdit(id, 'status', '완료');
    }
  };

  const handleImportanceEditClick = (id: number) => {
    const current =
      todoItems.find((item) => item.id === id) || todoItems[id + 1];
    // statusEdit(id, current);

    if (current.importance === '1') {
      todoItemsStateEdit(id, 'importance', '2');
    } else if (current.importance === '2') {
      todoItemsStateEdit(id, 'importance', '3');
    } else {
      todoItemsStateEdit(id, 'importance', '1');
    }
  };

  const handleEditDueDateRangeClick = () => {};

  const saveData = useCallback(() => {
    saveDataToLocalStorage('data', todoItems);
  }, [todoItems]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  const handleTodoItems = (newTodoItems: Itodo[]) => {
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div>
        {todoItems.map(({ id, taskName, status, dueDateRange, importance }) => (
          <div key={id}>
            <div>{id}</div>
            {contentEditMode && id === editedItemId ? (
              <input
                placeholder="To do what"
                onKeyPress={(e) => handleEnterPress(e, id)}
                ref={inputEl}
              />
            ) : (
              <div>taskName: {taskName}</div>
            )}
            <div>status: {status}</div>
            <div>
              dueDateRange: {dueDateRange[0]} ~ {dueDateRange[1]}
            </div>
            <div>importance: {importance}</div>
            <button type="button" onClick={() => handleDeleteClick(id)}>
              삭제
            </button>
            {contentEditMode && id === editedItemId ? (
              <button
                type="button"
                onClick={() => handleEndTaskNameEditClick(id)}
              >
                수정 완료
              </button>
            ) : (
              <button type="button" onClick={() => handleTaskNameEditClick(id)}>
                내용 수정
              </button>
            )}

            <button type="button" onClick={() => handleStatusEditClick(id)}>
              상태 수정
            </button>
            <button type="button" onClick={() => handleImportanceEditClick(id)}>
              중요도 수정
            </button>
            <button type="button">DueDateRange 수정</button>
          </div>
        ))}
      </div>
    </>
  );
}
