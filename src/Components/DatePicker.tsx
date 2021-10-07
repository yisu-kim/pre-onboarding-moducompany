import { useState } from 'react';
import { DateRange, OnDateRangeChangeProps, Range } from 'react-date-range';
import { ko } from 'date-fns/locale';
import styled from '@emotion/styled';

import getDefaultDueDateRange from 'Utils/RangePicker';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
  dueDateRange: Date[] | null;
  className?: string;
  onChange: ({ value }: { value: Date[] }) => void;
  onCloseClick: () => void;
  onSaveClick?: () => void;
  editMode?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  dueDateRange,
  className,
  onChange,
  onCloseClick,
  onSaveClick,
  editMode
}: DatePickerProps) => {
  const [dateRange, setDateRange] = useState<Range[]>([
    getDefaultDueDateRange({ dueDateRange })
  ]);

  const handleDateRangeChange = (range: OnDateRangeChangeProps) => {
    const { startDate, endDate } = range.selection;

    setDateRange([range.selection]);

    if (startDate && endDate) {
      onChange({ value: [startDate, endDate] });
    }
  };

  return (
    <Wrap className={className}>
      <DateRange
        ranges={dateRange}
        onChange={handleDateRangeChange}
        moveRangeOnFirstSelection={false}
        locale={ko}
        minDate={new Date()}
        dateDisplayFormat="yyyy / MM / dd"
      />
      {editMode && (
        <ButtonContainer>
          <Button type="button" onClick={onSaveClick}>
            저장
          </Button>
          <Button type="button" onClick={onCloseClick}>
            취소
          </Button>
        </ButtonContainer>
      )}
      {!editMode && (
        <Button type="button" onClick={onCloseClick}>
          닫기
        </Button>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
  z-index: 1000;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: block;
  padding: 15px 0;
  width: 100%;
  color: #aeb9bf;
  background: #f8f8f8;
  cursor: pointer;
  &:hover {
    background: #0099fd;
    color: #fff;
  }
`;

export default DatePicker;
