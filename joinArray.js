function merge(firstArray, addArray) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < firstArray.length && j < addArray.length) {
    if (firstArray[i] === -1) {
      firstArray += 1;
      continue;
    }
    if (addArray[j] === -1) {
      addArray += 1;
      continue;
    }

    if (firstArray[i] <= addArray[j]) {
      result.push(firstArray[i]);
      i += 1;
    } else {
      result.push(addArray[j]);
      j += 1;
    }
  }

  while (i < firstArray.length) {
    result.push(firstArray[i]);
    i += 1;
  }

  while (j < addArray.length) {
    result.push(addArray[j]);
    j += 1;
  }

  return result;
}

let A = [1, 2, 5, 7];
let B = [3, 4, 8];
console.log(merge(A, B));
