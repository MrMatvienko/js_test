// a = -5;

// if (a < 0) {
//   console.log(`Ваше число ${a} - від'ємне`);
// } else {
//   console.log(`Ваше число ${a} - дадатнє`);
// }
//------------------------------------------------//

// stroke = "Elevator";
// console.log(stroke.length);
//------------------------------------------------//

// a = 10;

// if (a % 2 === 0) {
//   console.log(`Ваше число ${a} - парне`);
// } else {
//   console.log(`Ваше число ${a} - не парне`);
// }
//------------------------------------------------//
// const a = "Amanda";
// const b = "Jack";

// if (a.slice(0, 1) === b.slice(0, 1)) {
//   console.log("First leter a = first leter b");
// } else {
//   console.log("First leter a != first leter b");
// }
//------------------------------------------------//

// const nam = "Маріуполь";
// let lastLet;
// const last = nam[nam.length - 1];
// if (last !== "ь") {
//   lastLet = nam[nam.length - 1];
// } else {
//   lastLet = nam[nam.length - 2];
// }
// console.log(`Last letter: ${lastLet}`);

//------------------------------------------------//
// a = 19805511;
// b = 141252;
// console.log(String(a)[0]);
// console.log(String(a)[String(a).length - 1]);

// const first = parseInt(String(a)[0]);
// const last = parseInt(String(a)[String(a).length - 1]);

// let sum = first + last;
// console.log(sum);

// const stroke = String(a);
// const stroke2 = String(b);
// console.log(stroke.length);

// if (stroke.slice(0, 1) === stroke2.slice(0, 1)) {
//   console.log("first letter true");
// } else {
//   console.log("first letter false");
// }

//------------------------------------------------//

// const stroke = "Amanda";

// if (stroke.length > 1) {
//   console.log(stroke[stroke.length - 2]);
// }

//------------------------------------------------//

// a = 10;
// b = 2;

// if (a % b !== 0) {
//   console.log("Число діллиться з остачею ");
// } else {
//   console.log("Число діллиться без остачі ");
// }

//------------------------------------------------//
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);
