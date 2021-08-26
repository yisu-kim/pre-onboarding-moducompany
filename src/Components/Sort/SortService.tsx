/* eslint-disable react/self-closing-comp */
import { Itodo } from 'Pages/Delete/Delete';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';

function SortService() {
  const fetchData = () => {
    const data = getDataFromLocalStorage('data');
    return data;
  };

  const sortDate = (current: Itodo[]) => {
    const sortD = [...current].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );
    return sortD;
  };

  const sortImportance = (current: Itodo[]) => {
    const sortI = [...current].sort((a, b) =>
      a.importance.localeCompare(b.importance)
    );
    return sortI;
  };

  return { fetchData, sortDate, sortImportance };
}
export default SortService;
