  function counter(arr) {
    let output = {};
    let unique = 0;

    for (let i = 0; i < arr.length; i++) {
      if (!output[arr[i]]) {
        output[arr[i]] = 1;
      } else {
        output[arr[i]] = output[arr[i]] + 1;
      }
    }

    console.log(output,"lazaaa")
    for (let key in output) {
      unique++;
    }
    return unique;
  }

  console.log(counter([1, 2, 3, 4, 4, 4, 7, 12, 12, 13,15]));
