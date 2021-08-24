import React from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const TodoListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
function TodoList({ data }: any) {
  console.log(data);
  // eslint-disable-next-line react/self-closing-comp
  return (
    <TodoListDiv>
      <TodoItem data={data} />
    </TodoListDiv>
  );
}

export default TodoList;
