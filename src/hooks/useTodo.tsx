import React, { useCallback, useState, useEffect } from 'react';

import getBiggestId from 'Utils/TodoForm';
import dateFormat from 'Utils/Date';
import {
  DUE_DATE_RANGE,
  STATUS_TYPE,
  IMPORTANCE_TYPE,
  IMPORTANCE_TYPE_NUMBER
} from 'Constants';
import { Itodo } from './useTodoItems';

type Name = 'id' | 'taskName' | 'dueDateRange' | 'importance';

const { HIGH, MEDIUM, LOW } = IMPORTANCE_TYPE;

export const IMPORTANCE_OPTIONS = [
  {
    value: '1',
    title: HIGH
  },
  {
    value: '2',
    title: MEDIUM
  },
  {
    value: '3',
    title: LOW
  }
];

const initialTodo = {
  taskName: '',
  isComplete: false,
  status: STATUS_TYPE.NOT_START,
  createdAt: dateFormat({ targetDate: new Date() }),
  updatedAt: dateFormat({ targetDate: new Date() }),
  dueDateRange: [new Date(), new Date()],
  importance: IMPORTANCE_TYPE_NUMBER.LOW
};

const createInitialTodoWithId = (id: number): Itodo => ({
  id: id + 1,
  ...initialTodo
});

const getLattestId = (todoItems: Itodo[]) =>
  todoItems?.length === 0 ? 0 : getBiggestId({ data: todoItems });

const useTodo = ({
  todoItems
}: {
  todoItems: Itodo[];
}): {
  todo: Itodo;
  handleChange: <T extends string>({
    name,
    value
  }: {
    name: T | Name;
    value: number | string | Date[];
  }) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleDateRangeChange: ({ value }: { value: Date[] }) => void;
  clearTodoInput: () => void;
} => {
  const [todo, setTodo] = useState<Itodo>(createInitialTodoWithId(0));

  useEffect(() => {
    const todoId = getLattestId(todoItems);

    setTodo(createInitialTodoWithId(todoId));
  }, [todoItems]);

  const handleChange = useCallback(
    <T extends string>({
      name,
      value
    }: {
      name: T | Name;
      value: number | string | Date[];
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

  const clearTodoInput = () => {
    setTodo(({ id }: { id: number }) => ({
      id,
      ...initialTodo
    }));
  };

  return {
    todo,
    handleChange,
    handleInputChange,
    handleDateRangeChange,
    clearTodoInput
  };
};

export default useTodo;
