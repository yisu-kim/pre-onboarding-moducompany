import { TODOS } from 'Constants';
import { Itodo } from 'hooks/useTodoItems';
import getDataFromLocalStorage from 'Utils/GetDataFromLocalStorage';

function SortService() {
  const fetchData = () => {
    const data = getDataFromLocalStorage(TODOS);
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
