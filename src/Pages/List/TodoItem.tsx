/* eslint-disable react/self-closing-comp */
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

interface TodoItemProps {
  data: Itodo;
}

const TodoItem = ({ data }: TodoItemProps) => {
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <TodoItemDiv>
      <TodoItemInfoDiv>
        <div
          style={{
            width: '20px',
            height: '20px',
            background: 'red',
            borderRadius: '50%'
          }}
        ></div>
        <div
          style={{
            width: '50px',
            height: '22px',
            background: 'green',
            borderRadius: '10%',
            marginLeft: '10px',
            color: '#ffffff',
            fontSize: '11px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span>{data.status}</span>
        </div>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <div>
          <span>{data.taskName}</span>
        </div>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <div>
          <span style={{ fontSize: '5px' }}>{data.dueDateRange}</span>
        </div>
        <div style={{ display: 'flex', marginLeft: '65%' }}>
          <SettingImage />
          <TrashImage />
        </div>
      </TodoItemInfoDiv>
    </TodoItemDiv>
  );
};

export default TodoItem;

