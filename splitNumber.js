const printDigitValue = (num, arr = [], m = 1) => {
  if (num) {
    return printDigitValue(
      Math.floor(num / 10),
      [m * (num % 10)].concat(arr),
      m * 10
    );
  }
  return arr;
};

console.log(printDigitValue("a9.86-A5.321".replace(/[^0-9]/g, "")));
