/* eslint-disable react/self-closing-comp */
import { Itodo } from 'Pages/Delete/Delete';
import { useEffect, useState } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';
import saveDataToLocalStorage from 'Utils/SaveDataToLocalStorage';

const initialTodos: Itodo[] = [];

function SortService() {
  const [todoItems, setTodoItems] = useState(initialTodos);

  useEffect((): void => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    setTodoItems(data);
  }, []);

  const sortDate = () => {
    const sortD = todoItems.sort();
    setTodoItems(sortD);
  };

  const sortImportance = () => {
    const sortI = todoItems.filter((data) => data.importance);
    setTodoItems(sortI);
  };

  return { sortDate, sortImportance };
}

export default SortService;
