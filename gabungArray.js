function swapArray(firstArray, addArray) {
  //   let result = [];
  for (let i = 0; i < addArray.length; i++) {
    firstArray.push(addArray[i]);
  }
  return firstArray;
}
let A = [1, 2, 5, 7];
var B = [3, 4, 8];

// console.log(swapArray(A, B).sort(),"random");

let hasil = swapArray(A, B).sort();
console.log(hasil,"hasilnya");
