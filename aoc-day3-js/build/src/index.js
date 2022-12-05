"use strict";
/* eslint-disable prettier/prettier */
const fs = require('fs');
const rucksackData = fs.readFileSync('./resources/input.txt', {
    encoding: 'utf8',
    flag: 'r',
});
const getDuplicateScore = (rucksackData) => {
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
    return getScore(duplicateItemDecimal);
};
const getScore = (itemDecimal) => {
    if (itemDecimal >= 65 && itemDecimal <= 90) {
        return itemDecimal - 38;
    }
    if (itemDecimal >= 97 && itemDecimal <= 122) {
        return itemDecimal - 96;
    }
    console.log('Oddity found: ', itemDecimal, ' char equivalent: ', String.fromCharCode(itemDecimal));
    return 0;
};
const splitArrayInHalf = (array) => {
    return [
        array.slice(0, array.length / 2),
        array.slice(array.length / 2, array.length),
    ];
};
const toDecimalArray = (string) => {
    return string.split('').map(char => char.charCodeAt(0));
};
console.log(rucksackData
    .split('\n')
    .map((data) => getDuplicateScore(data))
    .reduce((duplicateScore, totalDuplicateScore) => totalDuplicateScore + duplicateScore, 0));
//# sourceMappingURL=index.js.map