import styled from '@emotion/styled';
import { Itodo } from 'Pages/Delete/Delete';
import TodoItem from './TodoItem';

const TodoItemDiv = styled.div`
  width: 100%;
  padding: 10px;
`;

interface TodoItemProps {
  data: Itodo[];
}

function TodoList({ data }: TodoItemProps) {
  return (
    <TodoItemDiv>
      {data.map((r) => (
        <TodoItem key={r.id} data={r} />
      ))}
    </TodoItemDiv>
  );
}

export default TodoList;
