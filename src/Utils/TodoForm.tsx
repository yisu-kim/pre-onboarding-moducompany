import { Itodo } from 'hooks/useTodoItems';

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

export const getLastTodoId = (
  {
    todoItems
  }: {
    todoItems: Itodo[];
  } = { todoItems: [] }
): number => getBiggestId<Itodo>({ data: todoItems });
