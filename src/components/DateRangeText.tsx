import styled from '@emotion/styled';
import dateFormat from 'utils/date';

interface DateRangeTextProps {
  dueDateRange: Date[];
}

const DateRangeText: React.FC<DateRangeTextProps> = ({
  dueDateRange
}: DateRangeTextProps) => {
  const [startDate, endDate] = dueDateRange;

  return (
    <Wrap>
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

const Wrap = styled.div`
  margin-left: 5px;
`;

export default DateRangeText;
