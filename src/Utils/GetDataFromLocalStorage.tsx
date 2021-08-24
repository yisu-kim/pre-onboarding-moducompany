const getDataFromLocalStorage = (key: string) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData || '');
  }
  return null;
};

export default getDataFromLocalStorage;
