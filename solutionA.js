function solution(a) {
  // Your code starts here.

  const sym = Symbol;
  const faces = {
    [sym(";D")]: 10,
    [sym(";)")]: 9,
    [sym(":D")]: 8,
    [sym(":)")]: 7,
    [sym(";-(")]: 6,
    [sym(";[")]: 5,
    [sym(":(")]: 4,
  };

  let number = [];

  for (let i = 0; i < a.length; i++) {
    let key = a[i].toString();
    // let result = true;
    if (faces[key]) {
      number.push(faces[key]);
      //   return result;
    }
  }
  let output = "";
  for (let i = 0; i < number.length; i++) {
    if (i !== number.length - 1) {
      output += number[i] + " ";
    } else {
      output += number[i];
    }
  }
  if (output.length == 0) {
    return false;
  } else {
    return true;
  }

  console.log(number, "arraynya");

  return output;
}

console.log(solution(["XD;(sbos", ";D:zDDx:D", ";D;DDD;D"]));
console.log(solution([":(x:8*L:):X::D", ":D;):D"]));
