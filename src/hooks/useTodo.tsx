import { ChangeEvent, useState } from 'react';

import { Itodo } from 'Pages/Delete/Delete';
import { getLastTodoId } from 'Utils/TodoForm';

interface ITodoItem extends Omit<Itodo, 'dueDateRange'> {
  dueDateRange: string[] | null;
}

const initialTodo = (id: number): ITodoItem => ({
  id: id + 1,
  taskName: '',
  isComplete: false,
  status: '시작안함',
  createdAt: '',
  updatedAt: '',
  dueDateRange: null,
  importance: '1'
});

const useTodo = () => {
  const id = getLastTodoId() || 0;

  const [todo, setTodo] = useState(initialTodo(id));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return { todo, handleChange };
};

export default useTodo;
