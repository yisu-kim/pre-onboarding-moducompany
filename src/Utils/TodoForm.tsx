const getBiggestId = <
  T extends {
    id: number;
  }
>({
  data
}: {
  data: T[];
}): number => {
  const numbers = data.map((item: T) => item.id);

  return Math.max(...numbers);
};

export default getBiggestId;
