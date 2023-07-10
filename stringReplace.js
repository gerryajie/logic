let string = "xxfdx25y93.34xxd73";
let res = string.replace(/\D/g, "");
let arr = [];
let m = 1;
let hasil = res(Math.floor(res / 10), [m * (res % 10)].concat(arr), m * 10);
console.log(hasil);
