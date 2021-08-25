import styled from '@emotion/styled';
import { Itodo } from 'Pages/Delete/Delete';
import TodoItem from './TodoItem';

const TodoItemDiv = styled.div`
  width: 100%;
  padding: 10px;
`;

interface TodoItemProps {
  todoData: Itodo[];
}

function TodoList({ todoData }: TodoItemProps) {
  return (
    <TodoItemDiv>
      {todoData.map((r) => (
        <TodoItem key={r.id} data={r} />
      ))}
    </TodoItemDiv>
  );
}

export default TodoList;
