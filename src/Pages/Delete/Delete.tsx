import { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { DragProvider } from 'store/drag';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';
import DragNDrop from 'Components/DragNDrop';

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

  const handleTodoItems = (newTodoItems: Itodo[]) => {
    setTodoItems(newTodoItems);
  };

  return (
    <DragProvider>
      <TodoList>
        {todoItems.map(({ id, taskName }, index, array) => (
          <DragNDrop
            key={id}
            itemArray={array}
            itemIndex={index}
            updateItemArray={handleTodoItems}
          >
            <TodoItem>
              <div>{id}</div>
              <div>{taskName}</div>
              <input type="button" onClick={() => handleDeleteClick(id)} />
            </TodoItem>
          </DragNDrop>
        ))}
      </TodoList>
    </DragProvider>
  );
}

const TodoList = styled.ul`
  padding: 20px;
`;

const TodoItem = styled.li`
  background-color: white;
  margin: 15px 0;
  list-style: none;
  &:first-of-type {
    margin-top: 0;
  }
  & li:last-of-type {
    margin-bottom: 0;
  }
`;
