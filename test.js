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
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//------------------------------------------------//

// a = 47;
// b = 4;
// c = a % b;
// console.log(c);

//------------------------------------------------//
// const any = "Afafdkqwe";
// const length = any.length;

// for (let i = length - 1; i >= 0; i--) {
//   console.log(any[i]);
// }

//------------------------------------------------//

// const good = [4, 2, 1, 4, 2, 5, 2];
// const quadro = good.map((item) => item ** 2);
// console.log(quadro);
// let sum = 0;
// for (let i = 0; i < quadro.length; i++) {
//   sum += quadro[i];
// }
// console.log(sum);

//------------------------------------------------//

// const good = [4, 16, 9, 25, 81, 1, 4];
// const quadro = good.map((item) => Math.sqrt(item));
// console.log(quadro);
// let sum = 0;
// for (let i = 0; i < quadro.length; i++) {
//   sum += quadro[i];
// }
// console.log(sum);

//------------------------------------------------//
// const good = [4, 16, -9, 25, -81, 1, 4];
// let sum = 0;
// for (let i = 0; i < good.length; i++) {
//   if (good[i] >= 0) {
//     sum += good[i];
//   }
// }
// console.log(sum);
//------------------------------------------------//

// const good = [4, 16, -9, 25, -81, 1, 4];
// let sum = 0;
// for (let i = 0; i < good.length; i++) {
//   if (good[i] > 0 && good[i] < 10) {
//     sum += good[i];
//   }
// }
// console.log(sum);

//------------------------------------------------//

// const number = 12345;
// const digitArray = Array.from(String(number)).map(Number);

// console.log(digitArray);
// console.log(digitArray.reverse().join(""));

// let sum = 0;
// for (let i = 0; i < digitArray.length; i++) {
//   sum += digitArray[i];
// }
// console.log(sum);
//------------------------------------------------//
// const a = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     a.push(i);
//   }
// }
// console.log(a);
//------------------------------------------------//
// const numbers = [1.456, 2.125, 3.32, 4.1, 5.34];

// const roundedNumbers = numbers.map((num) => Math.round(num * 10) / 10);

// console.log(roundedNumbers);

//------------------------------------------------//

// const a = ["http://asdasf", "asfadgasd.html", "SSSSS", "http://SSSSSS"];
// const filtered1 = a.filter((item) => item.startsWith("http://"));
// const filtered = a.filter((item) => item.endsWith(".html"));
// console.log(filtered1);
// console.log(filtered);

//------------------------------------------------//
// const good = [4, 16, 9, 25, 81, 1, 4];
// const good2 = good.map((item) => item * 1.1);
// console.log(good2);

//------------------------------------------------//

// const a = [];
// for (let i = 1; i <= 100; i++) {
//   a.push(Math.floor(Math.random() * 100));
// }
// console.log(a);
//------------------------------------------------//

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

//------------------------------------------------//
// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i += 2) {
//   const subarray = arr.slice(i, i + 2);
//   console.log(subarray);
// }
