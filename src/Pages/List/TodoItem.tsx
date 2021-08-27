/* eslint-disable no-nested-ternary */
import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Itodo } from 'Pages/Delete/Delete';
import useTodo from 'hooks/useTodo';
import useRangePickerVisible from 'hooks/useRangePickerVisible';
import DatePicker from 'Components/DatePicker';

interface TodoItemProps {
  data: Itodo;
  deleteTodo: (id: number) => void;
  editTaskName: (id: number, newTaskName: string) => void;
  editStatus: (id: number) => void;
  editImportance: (id: number) => void;
  editDueDateRange: (id: number, value: Date[] | null) => void;
}

function TodoItem({
  data,
  deleteTodo,
  editTaskName,
  editStatus,
  editImportance,
  editDueDateRange
}: TodoItemProps) {
  const { todo, handleDateRangeChange } = useTodo();
  const { dueDateRange } = todo;
  const [taskNameEditMode, setTaskNameEditMode] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const {
    rangePickerOpen,
    handleRangePickerVisibleToggle,
    handleCloseButtonClick
  } = useRangePickerVisible();

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleTaskNameEdit = (id: number) => {
    const newTaskName = inputEl.current?.value || '';
    editTaskName(id, newTaskName);
    setTaskNameEditMode(false);
  };

  const handleEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === 'Enter') {
      handleTaskNameEdit(id);
    }
  };

  const handleStatusEditClick = (id: number) => {
    editStatus(id);
  };

  const handleImportanceEditClick = (id: number) => {
    editImportance(id);
  };

  const handleDateRangeSave = (id: number, dueDateRangeReal: Date[] | null) => {
    editDueDateRange(id, dueDateRangeReal);
    handleCloseButtonClick();
  };

  return (
    <TodoItemDiv>
      <TodoItemInfoDiv>
        <TopDiv>
          {' '}
          {data.importance === '3' ? (
            <Symbol
              color="green"
              onClick={() => handleImportanceEditClick(data.id)}
            />
          ) : data.importance === '1' ? (
            <Symbol
              color="red"
              onClick={() => handleImportanceEditClick(data.id)}
            />
          ) : (
            <Symbol
              color="yellow"
              onClick={() => handleImportanceEditClick(data.id)}
            />
          )}
          {data.status === '완료' ? (
            <StatusDiv
              color="green"
              onClick={() => handleStatusEditClick(data.id)}
            >
              <span>{data.status}</span>
            </StatusDiv>
          ) : data.status === '시작 안함' ? (
            <StatusDiv
              color="#c9c9c9"
              onClick={() => handleStatusEditClick(data.id)}
            >
              <span>{data.status}</span>
            </StatusDiv>
          ) : (
            <StatusDiv
              color="pink"
              onClick={() => handleStatusEditClick(data.id)}
            >
              <span>{data.status}</span>
            </StatusDiv>
          )}
        </TopDiv>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        {taskNameEditMode ? (
          <input
            placeholder="To do what"
            onKeyPress={(e) => handleEnterPress(e, data.id)}
            ref={inputEl}
          />
        ) : (
          <div>
            <span>{data.taskName}</span>
          </div>
        )}
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <DueDateRangeDiv>
          <span>⏱</span>
          {data.dueDateRange[0]} ~ {data.dueDateRange[1]}
        </DueDateRangeDiv>
        <div>
          {taskNameEditMode ? (
            <ConfirmBtn
              src="assets/img/confirm.svg"
              onClick={() => handleTaskNameEdit(data.id)}
            />
          ) : (
            <TackNameEditBtn
              src="assets/img/pencil.svg"
              onClick={() => setTaskNameEditMode((prev) => !prev)}
            />
          )}
          {rangePickerOpen ? (
            <CancelBtn
              src="assets/img/close.svg"
              onClick={handleRangePickerVisibleToggle}
            />
          ) : (
            <DueDateRangeEditBtn
              src="assets/img/calendar.svg"
              onClick={handleRangePickerVisibleToggle}
            />
          )}
          <TrashBtn
            src="assets/img/trash.svg"
            onClick={() => handleDelete(data.id)}
          />
        </div>
      </TodoItemInfoDiv>
      {rangePickerOpen && (
        <CustomDatePicker
          dueDateRange={[data.dueDateRange[0], data.dueDateRange[1]]}
          editMode="editMode"
          onSaveClick={() => handleDateRangeSave(data.id, dueDateRange)}
          onChange={handleDateRangeChange}
          onCloseClick={handleCloseButtonClick}
        />
      )}
    </TodoItemDiv>
  );
}

export default TodoItem;

const TodoItemDiv = styled.div`
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;
`;

const TodoItemInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TopDiv = styled.div`
  display: flex;
`;

const DueDateRangeDiv = styled.div`
  font-size: 8px;
`;

const Button = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;

const TrashBtn = styled(Button)``;
const ConfirmBtn = styled(Button)``;
const TackNameEditBtn = styled(Button)``;
const CancelBtn = styled(Button)``;
const DueDateRangeEditBtn = styled(Button)``;

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

const CustomDatePicker = styled(DatePicker)`
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%);
  box-shadow: 0px 4px 15px rgb(0 0 0 / 20%);
`;
