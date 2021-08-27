import React, { useCallback, useState } from 'react';

import { Itodo } from 'Pages/Delete/Delete';
import { getLastTodoId } from 'Utils/TodoForm';
import dateFormat from 'Utils/Date';
import { DUE_DATE_RANGE, STATUS_TYPE } from 'Constants';

interface ITodoItem extends Omit<Itodo, 'dueDateRange'> {
  dueDateRange: Date[] | null;
}

type Name = 'taskName' | 'dueDateRange' | 'importance';

const initialTodo = (id: number): ITodoItem => ({
  id: id + 1,
  taskName: '',
  isComplete: false,
  status: STATUS_TYPE.NOT_START,
  createdAt: dateFormat({ targetDate: new Date() }),
  updatedAt: dateFormat({ targetDate: new Date() }),
  dueDateRange: null,
  importance: ''
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

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    handleChange({ name, value });
  };

  const handleDateRangeChange = useCallback(
    ({ value }: { value: Date[] }) => {
      handleChange<Name>({ name: DUE_DATE_RANGE, value });
    },
    [handleChange]
  );

  return { todo, handleChange, handleInputChange, handleDateRangeChange };
};

export default useTodo;
