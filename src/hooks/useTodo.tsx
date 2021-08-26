import React, { useCallback, useState } from 'react';

import { Itodo } from 'Pages/Delete/Delete';
import { getLastTodoId } from 'Utils/TodoForm';
import dateFormat from 'Utils/Date';

interface ITodoItem extends Omit<Itodo, 'dueDateRange'> {
  dueDateRange: Date[] | null;
}

type Name = 'taskName' | 'dueDateRange' | 'importance';

const initialTodo = (id: number): ITodoItem => ({
  id: id + 1,
  taskName: '',
  isComplete: false,
  status: '시작안함',
  createdAt: dateFormat({ targetDate: new Date() }),
  updatedAt: dateFormat({ targetDate: new Date() }),
  dueDateRange: null,
  importance: '1'
});

const useTodo = () => {
  const id = getLastTodoId() || 0;

  const [todo, setTodo] = useState<ITodoItem>(initialTodo(id));

  const handleChange = useCallback(
    <T extends string>({
      name,
      value
    }: {
      name: T;
      value: string | Date[];
    }) => {
      setTodo((prev) => ({
        ...prev,
        [name]: value
      }));
    },
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    handleChange({ name, value });
  };

  const handleDateRangeChange = useCallback(
    ({ value }: { value: Date[] }) => {
      handleChange<Name>({ name: 'dueDateRange', value });
    },
    [handleChange]
  );

  return { todo, handleInputChange, handleDateRangeChange };
};

export default useTodo;
