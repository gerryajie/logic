// function test1() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 4 == 0 && i % 8 == 0) {
//       console.log("BUllDog");
//     } else if (i % 4 == 0) {
//       console.log("Bull");
//     } else if (i % 8 == 0) {
//       console.log("Dog");
//     } else {
//       console.log(i);
//     }
//   }
// }

// test1();

function dec2hex(i) {
  var result = "0000";
  if (i >= 0 && i <= 15) {
    result = "000" + i.toString(16);
  } else if (i >= 16 && i <= 255) {
    result = "00" + i.toString(16);
  } else if (i >= 256 && i <= 4095) {
    result = "0" + i.toString(16);
  } else if (i >= 4096 && i <= 65535) {
    result = i.toString(16);
  }
  return result;
}

console.log(dec2hex(100));
