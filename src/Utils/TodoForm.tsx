import getDataFromLocalStorage from './GetDataFromLocalStorage';

const getLastTodoId = () => {
  const todos = getDataFromLocalStorage('todos');

  if (!todos) {
    return null;
  }

  return todos[todos.length - 1].id;
};

export default getLastTodoId;
