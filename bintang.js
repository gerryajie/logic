const readline = require("readline");
const process = require("process");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("masukan baris: ", (baris) => {
  let pola = "";

  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j >= i; j--) {
      pola += " ";
    }
    for (let k = 1; k <= i; k++) {
      pola += "*";
    }
    for (let l = 1; l <= i - 1; l++) {
      pola += "*";
    }

    pola += "\n";
  }
  console.log(pola);
  input.close();
});
