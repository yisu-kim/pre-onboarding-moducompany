import { useState } from 'react';

const useRangePickerVisible = () => {
  const [rangePickerOpen, setRangePickerOpen] = useState(false);

  const handleRangePickerVisibleToggle = () => {
    setRangePickerOpen((prev: boolean) => !prev);
  };

  const handleCloseButtonClick = () => {
    setRangePickerOpen(false);
  };

  return {
    rangePickerOpen,
    handleRangePickerVisibleToggle,
    handleCloseButtonClick
  };
};

export default useRangePickerVisible;
