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

  const fetchData = () => {
    fetch('/Data/Data.json')
      .then((res) => res.json())
      .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    return data;
  };

  const sortDate = () => {
    const sortD = [...todoItems].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );

    return sortD;
  };

  const sortImportance = () => {
    const sortI = [...todoItems].sort((a, b) =>
      a.importance.localeCompare(b.importance)
    );
    return sortI;
  };

  //   문자열 high / medium / low 를 number형태롤 정렬을 어떻게 해야할지 모르겠네요
  //  high=3; medium=2; low =1; 이런식으로 본적은 있긴하나..

  return { fetchData, sortDate, sortImportance };
}

export default SortService;
