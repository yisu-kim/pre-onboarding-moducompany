/* eslint-disable react/self-closing-comp */
import styled from '@emotion/styled';

const TodoItemDiv = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 600px;
  border-radius: 10px;
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
`;

const TrashImage = styled.div`
  background-image: url('assets/img/trash.svg');
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin: 0px 5px;
`;

function TodoItem({ data }: any) {
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
          <span>진행중</span>
        </div>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <div>
          <span>자소서 쓰기 - 모두의 컴퍼니, 자란다, 원티드, 위코드 등등</span>
        </div>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <div>
          <span style={{ fontSize: '5px' }}>2021.08.23 ~ 2021.08.32</span>
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
