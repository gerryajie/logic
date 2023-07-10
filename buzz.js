function test1() {
  for (let i = 1; i <= 100; i++) {
    if (i % 4 == 0 && i % 8 == 0) {
      console.log("BUllDog");
    } else if (i % 4 == 0) {
      console.log("Bull");
    } else if (i % 8 == 0) {
      console.log("Dog");
    } else {
      console.log(i);
    }
  }
}

test1();

