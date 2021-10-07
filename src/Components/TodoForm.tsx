import React, { FC, useContext } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import useTodo, { IMPORTANCE_OPTIONS } from 'hooks/useTodo';
import useRangePickerVisible from 'hooks/useRangePickerVisible';

import dateFormat from 'Utils/date';

import TodoContext from 'store/Todo';
import DatePicker from './DatePicker';
import DateRangeText from './DateRangeText';

const TodoForm: FC = () => {
  const {
    state: { todoItems },
    actions: { addTodo }
  } = useContext(TodoContext);

  const {
    todo,
    handleChange,
    handleInputChange,
    handleDateRangeChange,
    clearTodoInput
  } = useTodo({ todoItems });

  const { id, taskName, dueDateRange, importance } = todo;

  const {
    rangePickerOpen,
    handleRangePickerVisibleToggle,
    handleCloseButtonClick
  } = useRangePickerVisible();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handleChange({ name: 'id', value: id + 1 });

    addTodo({ todo });

    clearTodoInput();
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Today>Today is, {dateFormat({ targetDate: new Date() })}</Today>
      <form>
        <FormTop>
          <InputBox>
            <input
              name="taskName"
              value={taskName}
              onChange={handleInputChange}
            />
            <IconButton
              type="button"
              onClick={handleRangePickerVisibleToggle}
              active={rangePickerOpen}
            >
              <FaCalendarAlt />
            </IconButton>
          </InputBox>
          <Select>
            <select
              name="importance"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              defaultValue={importance}
            >
              <optgroup label="중요도">
                {IMPORTANCE_OPTIONS.map(({ value, title }) => (
                  <option key={value} value={value}>
                    {title}
                  </option>
                ))}
              </optgroup>
            </select>
            <MdKeyboardArrowDown />
          </Select>
        </FormTop>

        {dueDateRange && <DateRangeText dueDateRange={dueDateRange} />}

        <Button type="submit">추가</Button>

        {rangePickerOpen && (
          <CustomDatePicker
            dueDateRange={dueDateRange}
            onChange={handleDateRangeChange}
            onCloseClick={handleCloseButtonClick}
          />
        )}
      </form>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  display: inline-block;
  max-width: 500px;
  width: 100%;
  form {
    position: relative;
  }
`;

const Today = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  color: #aeb9bf;
`;

const FormTop = styled.div`
  display: flex;
  & + button {
    margin-top: 20px;
  }
  & + p {
    margin: 20px 0;
  }
  & > * + * {
    margin-left: 5px;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;

    & > * + * {
      margin: 5px 0 0 0;
    }
  }
`;

const InputBox = styled.p`
  display: flex;
  flex: 1;
  height: 37px;
  border: 1px solid #dcdcdc;
  input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
  }
  button {
    border: none;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 15px rgb(0 0 0 / 20%);
`;

const Button = styled.button`
  padding: 10px 20px;
  height: 37px;
  color: #999;
  border: 1px solid #dcdcdc;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    color: #0099fd;
    border-color: #0099fd;
  }
`;

const Select = styled.p`
  position: relative;
  display: inline-block;
  height: 37px;
  color: #999;
  text-align: center;
  border: 1px solid #dcdcdc;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    color: #0099fd;
    border-color: #0099fd;
  }
  select {
    padding: 10px 30px 10px 20px;
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;
    background: none;
  }
  svg {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 420px) {
    display: flex;
    select {
      flex: 1;
    }
  }
`;

const IconButton = styled(Button)`
  padding: 10px;
  ${({ active }: { active?: boolean }) =>
    active &&
    css`
      color: #0099fd;
      border-color: #0099fd;
    `}
`;

export default TodoForm;
