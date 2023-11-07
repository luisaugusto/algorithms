const array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100000));
console.log(array);

const bubbleSort = async () => {
  console.time('bubbleSort');

  const maxIndex = array.length - 1;
  for (let stopIndex = maxIndex; stopIndex > 0; stopIndex -= 1) {
    for (let index = 0; index < stopIndex; index += 1) {
      const nextValue = array[index + 1];
      if (nextValue < array[index]) {
        array[index + 1] = array[index];
        array[index] = nextValue;
      }
    }
  }

  console.timeEnd('bubbleSort');
  return array;
};

bubbleSort().then((sortedArray) => console.log(sortedArray));
