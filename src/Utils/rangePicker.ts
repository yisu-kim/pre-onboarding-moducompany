import { Range } from 'react-date-range';

const initialDateRange: Range = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

const getDefaultDueDateRange = ({
  dueDateRange
}: {
  dueDateRange: Date[] | null;
}): Range => {
  if (!dueDateRange) {
    return initialDateRange;
  }

  const defaultDueDate = {
    startDate: new Date(dueDateRange[0]),
    endDate: new Date(dueDateRange[1]),
    key: 'selection'
  };

  return defaultDueDate;
};

export default getDefaultDueDateRange;
