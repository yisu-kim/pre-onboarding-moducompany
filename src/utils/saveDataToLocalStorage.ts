import { Itodo } from 'hooks/useTodoItems';

const saveDataToLocalStorage = (key: string, value: Itodo[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
export default saveDataToLocalStorage;
