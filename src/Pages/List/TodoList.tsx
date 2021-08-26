import styled from '@emotion/styled';
import DragNDrop from 'Components/DragNDrop';
import { Itodo } from 'Pages/Delete/Delete';
import { DragProvider } from 'store/drag';
import TodoItem from './TodoItem';

const TodoItemDiv = styled.div`
  width: 100%;
  padding: 10px;
`;

interface TodoItemProps {
  todoItems: Itodo[];
  setTodoItems: (newTodoItems: Itodo[]) => void;
  enableDrag: boolean;
  deleteTodo: (id: number) => void;
  editTaskName: (id: number, newTaskName: string) => void;
  editStatus: (id: number) => void;
  editImportance: (id: number) => void;
}

function TodoList({
  todoItems,
  setTodoItems,
  enableDrag,
  deleteTodo,
  editTaskName,
  editStatus,
  editImportance
}: TodoItemProps) {
  return (
    <DragProvider>
      <TodoItemDiv>
        {todoItems.map((todo, index, array) =>
          enableDrag ? (
            <DragNDrop
              key={todo.id}
              itemArray={array}
              itemIndex={index}
              updateItemArray={setTodoItems}
            >
              <TodoItem
                data={todo}
                deleteTodo={deleteTodo}
                editTaskName={editTaskName}
                editStatus={editStatus}
                editImportance={editImportance}
              />
            </DragNDrop>
          ) : (
            <TodoItem
              key={todo.id}
              data={todo}
              deleteTodo={deleteTodo}
              editTaskName={editTaskName}
              editStatus={editStatus}
              editImportance={editImportance}
            />
          )
        )}
      </TodoItemDiv>
    </DragProvider>
  );
}

export default TodoList;
