import { useState } from 'react';

const useRangePickerVisible = (): {
  rangePickerOpen: boolean;
  handleRangePickerVisibleToggle: () => void;
  handleCloseButtonClick: () => void;
} => {
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
