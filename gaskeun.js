const splitNumber = (num, arr = [], m = 1) => {
  //   let str = "";
  //   var num = str.replace(/\D/g, "");
  if (num) {
    return splitNumber(
      Math.floor(num / 10),
      [m * (num % 10)].concat(arr),
      m * 10
    );
  }
  return arr;
};

console.log(splitNumber("2223"));
// console.log(splitNumber(5664));
// console.log(splitNumber(3453));
// console.log(splitNumber(2));
console.log(splitNumber(657576));
// console.log(splitNumber(345232));
