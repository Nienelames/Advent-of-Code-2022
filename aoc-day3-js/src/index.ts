/* eslint-disable prettier/prettier */
const fs = require('fs');

const rucksackData = fs.readFileSync('./resources/input.txt', {
  encoding: 'utf8',
  flag: 'r',
});

const getDuplicateScore = (rucksackData: string) => {
  const rucksackDecimalData = toDecimalArray(rucksackData);
  const [firstHalf, secondHalf] = splitArrayInHalf(rucksackDecimalData);
  let duplicateItemDecimal = 0;

  secondHalf.every(itemDecimal => {
    if (firstHalf.includes(itemDecimal)) {
      duplicateItemDecimal = itemDecimal;

      return false;
    }

    return true;
  });

  return getPriorityScore(duplicateItemDecimal);
};

const getPriorityScore = (itemDecimal: number) => {
  if (itemDecimal >= 65 && itemDecimal <= 90) {
    return itemDecimal - 38;
  }

  if (itemDecimal >= 97 && itemDecimal <= 122) {
    return itemDecimal - 96;
  }

  return 0
};

const splitArrayInHalf = (array: any[]) => {
  return [
    array.slice(0, array.length / 2),
    array.slice(array.length / 2, array.length),
  ];
};

const toDecimalArray = (string: string) => {
  return string.split('').map(char => char.charCodeAt(0));
};

console.log(
  rucksackData
    .split('\n')
    .map((data: string) => getDuplicateScore(data))
    .reduce(
      (duplicateScore: number, totalDuplicateScore: number) =>
        totalDuplicateScore + duplicateScore,
      0
    )
);
