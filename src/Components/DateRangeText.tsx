import styled from '@emotion/styled';
import dateFormat from 'Utils/date';

interface DateRangeTextProps {
  dueDateRange: Date[];
}

const DateRangeText: React.FC<DateRangeTextProps> = ({
  dueDateRange
}: DateRangeTextProps) => {
  const [startDate, endDate] = dueDateRange;

  return (
    <Wrap>
      <span>⏱</span>
      <span>
        {dueDateRange && dateFormat({ targetDate: new Date(startDate) })}
      </span>
      <span>~</span>
      <span>
        {dueDateRange && dateFormat({ targetDate: new Date(endDate) })}
      </span>
    </Wrap>
  );
};

const Wrap = styled.p`
  span {
    vertical-align: middle;
    line-height: 1;
  }
  span + span {
    margin-left: 5px;
  }
`;

export default DateRangeText;
