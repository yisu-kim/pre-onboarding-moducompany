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
  todoData: Itodo[];
  handleTodoItems: (newTodoItems: Itodo[]) => void;
}

function TodoList({ todoData, handleTodoItems }: TodoItemProps) {
  return (
    <DragProvider>
      <TodoItemDiv>
        {todoData.map((todo, index, array) => (
          <DragNDrop
            key={todo.id}
            itemArray={array}
            itemIndex={index}
            updateItemArray={handleTodoItems}
          >
            <TodoItem data={todo} />
          </DragNDrop>
        ))}
      </TodoItemDiv>
    </DragProvider>
  );
}

export default TodoList;
