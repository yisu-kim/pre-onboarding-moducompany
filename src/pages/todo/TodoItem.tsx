/* eslint-disable no-nested-ternary */
import React, { useState, useRef, useContext } from 'react';
import styled from '@emotion/styled';
import { Itodo } from 'hooks/useTodoItems';
import useTodo from 'hooks/useTodo';
import useRangePickerVisible from 'hooks/useRangePickerVisible';
import DatePicker from 'components/DatePicker';
import {
  CALENDAR_ICON,
  CANCEL_ICON,
  CONFIRM_ICON,
  IMPORTANCE_TYPE_COLOR,
  PENCIL_ICON,
  STATUS_TYPE,
  TRASH_ICON
} from 'utils/constants';
import DateRangeText from 'components/DateRangeText';
import TodoContext from 'store/todo';

interface TodoItemProps {
  data: Itodo;
  deleteTodo: (id: number) => void;
  editTaskName: (id: number, newTaskName: string) => void;
  editStatus: (id: number) => void;
  editImportance: (id: number) => void;
  editDueDateRange: (id: number, value: Date[] | null) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  data,
  deleteTodo,
  editTaskName,
  editStatus,
  editImportance,
  editDueDateRange
}: TodoItemProps) => {
  const {
    state: { todoItems }
  } = useContext(TodoContext);

  const { todo, handleDateRangeChange } = useTodo({ todoItems });
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
    <TodoItemDiv isComplete={data.status === FINISHED}>
      <TodoItemInfoDiv>
        <TopDiv>
          {data.importance === '3' ? (
            <Symbol
              color={GREEN}
              onClick={() => handleImportanceEditClick(data.id)}
            />
          ) : data.importance === '1' ? (
            <Symbol
              color={RED}
              onClick={() => handleImportanceEditClick(data.id)}
            />
          ) : (
            <Symbol
              color={YELLOW}
              onClick={() => handleImportanceEditClick(data.id)}
            />
          )}
          {data.status === FINISHED ? (
            <StatusDiv
              color="green"
              onClick={() => handleStatusEditClick(data.id)}
            >
              <span>{data.status}</span>
            </StatusDiv>
          ) : data.status === NOT_START ? (
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
        <TaskName>
          {taskNameEditMode ? (
            <input
              placeholder="To do what"
              onKeyPress={(e) => handleEnterPress(e, data.id)}
              ref={inputEl}
            />
          ) : (
            <TaskNameParagraph>{data.taskName}</TaskNameParagraph>
          )}
        </TaskName>
        <TaskControlDiv>
          {taskNameEditMode ? (
            <ConfirmBtn
              src={CONFIRM_ICON}
              onClick={() => handleTaskNameEdit(data.id)}
            />
          ) : (
            <TaskNameEditBtn
              src={PENCIL_ICON}
              onClick={() => setTaskNameEditMode((prev) => !prev)}
            />
          )}
          <TrashBtn src={TRASH_ICON} onClick={() => handleDelete(data.id)} />
        </TaskControlDiv>
      </TodoItemInfoDiv>
      <TodoItemInfoDiv>
        <DueDateRangeDiv>
          {rangePickerOpen ? (
            <CancelBtn
              src={CANCEL_ICON}
              onClick={handleRangePickerVisibleToggle}
            />
          ) : (
            <DueDateRangeEditBtn
              src={CALENDAR_ICON}
              onClick={handleRangePickerVisibleToggle}
            />
          )}
          <DateRangeText dueDateRange={data.dueDateRange} />
        </DueDateRangeDiv>
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
};

export default TodoItem;

const TodoItemDiv = styled.div<{ isComplete: boolean }>`
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  ${({ isComplete }) =>
    isComplete &&
    `
    & * {
      opacity: 0.7;
    }
  `};
`;

const TodoItemInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const TopDiv = styled.div`
  display: flex;
`;

const DueDateRangeDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
`;

const TaskName = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const TaskNameParagraph = styled.p`
  word-break: break-all;
`;

const TaskControlDiv = styled.div`
  margin-left: 10px;
`;

const Button = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;

const TrashBtn = styled(Button)``;
const ConfirmBtn = styled(Button)``;
const TaskNameEditBtn = styled(Button)``;
const CancelBtn = styled(Button)`
  margin: 0;
  height: 12px;
`;
const DueDateRangeEditBtn = styled(Button)`
  margin: 0;
  height: 12px;
`;

const Symbol = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
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
  cursor: pointer;
  & > span {
    white-space: pre;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%);
  box-shadow: 0px 4px 15px rgb(0 0 0 / 20%);
`;

const { NOT_START, FINISHED } = STATUS_TYPE;
const { RED, YELLOW, GREEN } = IMPORTANCE_TYPE_COLOR;
