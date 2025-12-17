//task6

export const taskConcat = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  const newArr = arr1.concat(arr2);
  return { result: newArr };
};
