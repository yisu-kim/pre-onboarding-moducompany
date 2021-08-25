const dateFormat = ({ targetDate }: { targetDate: Date }): string => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth();
  const date = targetDate.getDate();

  return `${year}-${month}-${date}`;
};

export default dateFormat;
