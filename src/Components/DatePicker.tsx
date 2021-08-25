import { DateRange, OnDateRangeChangeProps, Range } from 'react-date-range';
import { ko } from 'date-fns/locale';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
  ranges: Range[] | undefined;
  onChange: (range: OnDateRangeChangeProps) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ ranges, onChange }) => (
  <DateRange
    ranges={ranges}
    onChange={onChange}
    moveRangeOnFirstSelection={false}
    locale={ko}
    minDate={new Date()}
    dateDisplayFormat="yyyy / MM / dd"
  />
);

export default DatePicker;
