function combinations(length, total) {
  const result = [];

  if (length === 1) {
    result.push(total);
    return result;
  }

  for (let index = 11; index < 999999999; index++) {
    const indexString = index.toString();
    // console.log(indexString);

    if (
      (indexString.length === 9 &&
        parseInt(indexString[8]) > parseInt(indexString[7]) &&
        parseInt(indexString[7]) > parseInt(indexString[6]) &&
        parseInt(indexString[6]) > parseInt(indexString[5]) &&
        parseInt(indexString[5]) > parseInt(indexString[4]) &&
        parseInt(indexString[4]) > parseInt(indexString[3]) &&
        parseInt(indexString[3]) > parseInt(indexString[2]) &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 8 &&
        parseInt(indexString[7]) > parseInt(indexString[6]) &&
        parseInt(indexString[6]) > parseInt(indexString[5]) &&
        parseInt(indexString[5]) > parseInt(indexString[4]) &&
        parseInt(indexString[4]) > parseInt(indexString[3]) &&
        parseInt(indexString[3]) > parseInt(indexString[2]) &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 7 &&
        parseInt(indexString[6]) > parseInt(indexString[5]) &&
        parseInt(indexString[5]) > parseInt(indexString[4]) &&
        parseInt(indexString[4]) > parseInt(indexString[3]) &&
        parseInt(indexString[3]) > parseInt(indexString[2]) &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 6 &&
        parseInt(indexString[5]) > parseInt(indexString[4]) &&
        parseInt(indexString[4]) > parseInt(indexString[3]) &&
        parseInt(indexString[3]) > parseInt(indexString[2]) &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 5 &&
        parseInt(indexString[4]) > parseInt(indexString[3]) &&
        parseInt(indexString[3]) > parseInt(indexString[2]) &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 4 &&
        parseInt(indexString[3]) > parseInt(indexString[2]) &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 3 &&
        parseInt(indexString[2]) > parseInt(indexString[1]) &&
        parseInt(indexString[1]) > parseInt(indexString[0])) ||
      (indexString.length === 2 &&
        parseInt(indexString[1]) > parseInt(indexString[0]))
    ) {
      if (indexString.length === length) {
        const numbers = indexString.split("").map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);

        if (sum === total) {
          result.push(numbers);
        }
      }
    }
  }

  return result;
}

console.log(combinations(3, 6));
console.log(combinations(3, 8));
console.log(combinations(4, 9));

console.log(combinations(9, 45));
