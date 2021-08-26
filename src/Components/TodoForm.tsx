import { FC } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import useTodo from 'hooks/useTodo';
import useRangePickerVisible from 'hooks/useRangePickerVisible';

import dateFormat from 'Utils/Date';
import DatePicker from './DatePicker';
import DateRangeText from './DateRangeText';

const TodoForm: FC = () => {
  const { todo, handleInputChange, handleDateRangeChange } = useTodo();
  const { taskName, dueDateRange } = todo;

  const {
    rangePickerOpen,
    handleRangePickerVisibleToggle,
    handleCloseButtonClick
  } = useRangePickerVisible();

  return (
    <FormWrap>
      <h2>{dateFormat({ targetDate: new Date() })}</h2>
      <form>
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
        {rangePickerOpen && (
          <CustomDatePicker
            dueDateRange={dueDateRange}
            onChange={handleDateRangeChange}
            onCloseClick={handleCloseButtonClick}
          />
        )}
        <Button type="submit">추가</Button>
      </form>
      {dueDateRange && <DateRangeText dueDateRange={dueDateRange} />}
    </FormWrap>
  );
};

const FormWrap = styled.div`
  display: inline-block;
  h2 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    position: relative;
  }
`;

const InputBox = styled.p`
  input {
    padding: 10px;
    width: 300px;
    border: 1px solid #dcdcdc;
    outline: none;
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
  padding: 10px;
  margin-left: 5px;
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

const IconButton = styled(Button)`
  width: 37px;
  ${({ active }: { active?: boolean }) =>
    active &&
    css`
      color: #0099fd;
      border-color: #0099fd;
    `}
`;

export default TodoForm;
