const getDataFromLocalStorage = (key: string): unknown | null => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData || '');
  }
  return null;
};

export default getDataFromLocalStorage;
