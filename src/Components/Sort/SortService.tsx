/* eslint-disable react/self-closing-comp */
import { useCallback } from 'react';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';

function SortService() {
  const fetchData = useCallback(() => {
    // fetch('/Data/Data.json')
    //   .then((res) => res.json())
    //   .then((data) => saveDataToLocalStorage('data', data));

    const data = getDataFromLocalStorage('data');
    return data;
  }, []);

  const sortDate = () => {
    const data = getDataFromLocalStorage('data');
    const sortD = [...data].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );

    return sortD;
  };

  const sortImportance = () => {
    const data = getDataFromLocalStorage('data');
    const sortI = [...data].sort((a, b) =>
      a.importance.localeCompare(b.importance)
    );
    return sortI;
  };

  return { fetchData, sortDate, sortImportance };
}

export default SortService;
