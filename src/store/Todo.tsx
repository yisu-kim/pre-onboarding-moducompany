import React, { createContext } from 'react';
import useTodoItems, { Itodo } from 'hooks/useTodoItems';

interface ITodoContext {
  state: {
    todoItems: Itodo[];
  };
  actions: {
    // setTodoItems: Dispatch<SetStateAction<Itodo[]>>;
    handleTodoItems: (newTodoItems: Itodo[]) => void;
    addTodo: ({ todo }: { todo: Itodo }) => void;
    deleteTodo: (id: number) => void;
    editTaskName: (id: number, newTaskName: string) => void;
    editStatus: (id: number) => void;
    editImportance: (id: number) => void;
    editDueDateRange: (id: number, value: Date[] | null) => void;
  };
}
const defaultValue: ITodoContext = {
  state: {
    todoItems: []
  },
  actions: {
    handleTodoItems: () => {},
    deleteTodo: () => {},
    addTodo: () => {},
    editTaskName: () => {},
    editStatus: () => {},
    editImportance: () => {},
    editDueDateRange: () => {}
  }
};

const TodoContext = createContext<ITodoContext>(defaultValue);

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const {
    todoItems,
    deleteTodo,
    addTodo,
    editTaskName,
    editStatus,
    editImportance,
    editDueDateRange,
    handleTodoItems
  } = useTodoItems();

  const value: ITodoContext = {
    state: { todoItems },
    actions: {
      deleteTodo,
      addTodo,
      editTaskName,
      editStatus,
      editImportance,
      editDueDateRange,
      handleTodoItems
    }
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const TodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoConsumer };
export default TodoContext;
