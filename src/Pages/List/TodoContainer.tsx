import styled from '@emotion/styled';
import SortService from 'Pages/List/SortService';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import TodoContext from 'store/Todo';
import { Itodo } from 'hooks/useTodoItems';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [sortState, setSortState] = useState<string>('basic');
  const [sortedItems, setSortedItems] = useState<Itodo[]>([]);
  const { sortDate, sortImportance } = SortService();
  const [isBasic, setIsBasic] = useState<boolean>(sortState === 'basic');

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortState(e.target.value);
  };

  const {
    state: { todoItems },
    actions: {
      deleteTodo,
      editTaskName,
      editStatus,
      editImportance,
      editDueDateRange,
      handleTodoItems
    }
  } = useContext(TodoContext);

  const todoSort = useCallback(
    (selectName: string): Itodo[] => {
      switch (selectName) {
        case 'Date':
          return sortDate(todoItems);
        case 'Importance':
          return sortImportance(todoItems);
        default:
          return todoItems;
      }
    },
    [todoItems]
  );

  useEffect(() => {
    if (sortState === 'basic') {
      setIsBasic(true);
    } else {
      setIsBasic(false);
    }

    const sorted = todoSort(sortState);
    setSortedItems(sorted);
  }, [sortState, todoSort]);

  return (
    <Wrapper>
      <TodoSelectedContainer>
        <TodoSelectedDiv>
          <SortButton src="https://ifh.cc/g/CbWQQv.png" alt="" />
          <select onChange={sortChange} value={sortState}>
            <option value="basic">기본정렬</option>
            <option value="Date">생성일순</option>
            <option value="Importance">중요도순</option>
          </select>
        </TodoSelectedDiv>
      </TodoSelectedContainer>
      <TodoList
        todoItems={isBasic ? todoItems : sortedItems}
        deleteTodo={deleteTodo}
        editTaskName={editTaskName}
        editStatus={editStatus}
        editImportance={editImportance}
        editDueDateRange={editDueDateRange}
        handleTodoItems={handleTodoItems}
        enableDrag={isBasic}
      />
    </Wrapper>
  );
};

export default TodoContainer;

const Wrapper = styled.div`
  animation-name: DocumentPalette;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 50px;
`;

const TodoSelectedContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const TodoSelectedDiv = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  margin: 30px 30px 0 0;
`;

const SortButton = styled.img`
  width: 20px;
  margin-right: 5px;
`;
