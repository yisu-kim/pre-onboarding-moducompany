/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import { Itodo } from 'Pages/Delete/Delete';

const TodoItemDiv = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;
`;

const TodoItemInfoDiv = styled.div`
  display: flex;
  padding: 10px;
`;

const SettingImage = styled.div`
  background-image: url('assets/img/setting.svg');
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;

const TrashImage = styled.div`
  background-image: url('assets/img/trash.svg');
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;

const Symbol = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;

const StatusDiv = styled.div`
  padding: 0px 10px;
  height: 20px;
  background: ${(props) => props.color};
  border-radius: 10%;
  margin-left: 10px;
  color: #ffffff;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface TodoItemProps {
  data: Itodo;
}

function TodoItem({ data }: TodoItemProps) {
  return (
    <TodoItemDiv>
      <TodoItemInfoDiv>
        {data.importance === '3' ? (
          <Symbol color="green" />
        ) : data.importance === '1' ? (
          <Symbol color="red" />
        ) : (
          <Symbol color="yellow" />
        )}

        {data.status === '완료' ? (
          <StatusDiv color="green">
            <span>{data.status}</span>
          </StatusDiv>
        ) : data.status === '시작안함' ? (
          <StatusDiv color="#c9c9c9">
            <span>{data.status}</span>
          </StatusDiv>
        ) : (
          <StatusDiv color="pink">
            <span>{data.status}</span>
          </StatusDiv>
        )}
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <div>
          <span>{data.taskName}</span>
        </div>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <div>
          <span style={{ fontSize: '5px' }}>
            {data.dueDateRange[0]} ~ {data.dueDateRange[1]}
          </span>
        </div>
        <div style={{ display: 'flex', marginLeft: '65%' }}>
          <SettingImage />
          <TrashImage />
        </div>
      </TodoItemInfoDiv>
    </TodoItemDiv>
  );
}

export default TodoItem;
