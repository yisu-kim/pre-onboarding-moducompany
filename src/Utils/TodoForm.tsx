import { Itodo } from 'Pages/Delete/Delete';
import getDataFromLocalStorage from './GetDataFromLocalStorage';

export const getBiggestId = <
  T extends {
    id: number;
  }
>({
  data
}: {
  data: T[];
}) => {
  const numbers = data.map((item: T) => item.id);

  return Math.max(...numbers);
};

export const getLastTodoId = (): number | null => {
  const todos = getDataFromLocalStorage('todos');

  if (!todos) {
    return null;
  }

  return getBiggestId<Itodo>({ data: todos });
};
