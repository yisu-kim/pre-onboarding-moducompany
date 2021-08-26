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
}

const DatePicker: React.FC<DatePickerProps> = ({
  dueDateRange,
  className,
  onChange,
  onCloseClick
}) => {
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
      <Button type="button" onClick={onCloseClick}>
        닫기
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
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
