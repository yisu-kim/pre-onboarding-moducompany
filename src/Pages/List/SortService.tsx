import { Itodo } from 'hooks/useTodoItems';

const SortService = (): {
  sortDate: (current: Itodo[]) => Itodo[];
  sortImportance: (current: Itodo[]) => Itodo[];
} => {
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

  return { sortDate, sortImportance };
};
export default SortService;
