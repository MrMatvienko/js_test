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
//------------------------------------------------//
// const str = "my like number 0";
// console.log(str.indexOf(0));

//------------------------------------------------//

// for (let i = 10; i <= 999; i++) {
//   let str = String(i);
//   let sum = Number(str[0]) + Number(str[1]);
//   if (sum === 5) {
//     console.log(i);
//   }
// }

//------------------------------------------------//
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
// const arr2 = arr.splice(0, arr.length / 2);
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i];
// }
// console.log(sum);
//------------------------------------------------//
// const arr = [1, -2, 3, 4, -5, -6];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count = count + 1;
//   }
// }
// console.log(count);
//------------------------------------------------//
// const arr = [1, -2, 3, 4, -5, 6];
// const posarr = arr.filter((item) => item > 0);
// console.log(posarr);

//------------------------------------------------//

// const str = "Abcdef";
// let modifiedStr = str.slice(0, -1);
// console.log(modifiedStr);
//------------------------------------------------//

// const arr = [1, 2, 3, 4, 5, 6];

// const arrhalf = arr.length / 2;
// console.log(arrhalf);
// let sum1 = 0;
// let sum2 = 0;
// const half1 = arr.slice(0, arrhalf);
// const half2 = arr.slice(arrhalf);
// half1.forEach((item) => {
//   sum1 += item;
// });
// console.log(sum1);

// half2.forEach((item) => {
//   sum2 += item;
// });
// console.log(sum2);

// const math = sum1 / sum2;
// console.log(math);

//------------------------------------------------//

// const word1 = "Nikolaі";
// const word2 = "Amanda";

// if (word1.toLowerCase()[word1.length - 1] === word2.toLowerCase()[0]) {
//   console.log("Рівність вірна");
// } else {
//   console.log("Рівність не вірна");
// }
//------------------------------------------------//
// const stroke = "120421023522";

// function findThreeZero(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "0") {
//       count = count + 1;
//       if (count === 3) {
//         return i;
//       }
//     }
//   }
//   return -1;
// }

// const zeroPosition = findThreeZero(stroke);
// if (zeroPosition != -1) {
//   console.log(`Позиція третього нуля ${zeroPosition}`);
// } else {
//   console.log("Позицію не знайдено");
// }
//------------------------------------------------//

// const dateString = "2025-12-31";

// const [year, month, day] = dateString.split("-");

// const dataObject = {
//   year,
//   month,
//   day,
// };
// console.log(dataObject);
//------------------------------------------------//

// const str = "12,34,56";
// const arrNum = str.split(",").map(Number);
// console.log(arrNum);
// let sum = 0;
// for (let i = 0; i < arrNum.length; i++) {
//   sum += arrNum[i];
// }
// console.log(sum);
//------------------------------------------------//
// const str1 = "ad1ff210as23";

// function findNumber(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       return i;
//     }
//   }
//   return -1;
// }

// const findNum = findNumber(str1);
// if (findNum !== -1) {
//   console.log("Позиція першої цифри:", findNum);
// } else {
//   console.log("Цифра не знайдена в рядку.");
// }
//------------------------------------------------//
// const dataObject = {
//   year: 1993,
//   month: 12,
//   day: 04,
// };
// const keys = Object.keys(dataObject);
// console.log(keys);
// const value = Object.values(dataObject);
// console.log(value);
//------------------------------------------------//
// Дано число. Выведите в консоль количество четных цифр в этом числе.
// const num = 281753;

// const numStr = num.toString().split("");
// console.log(numStr);
// let countPlus = 0;
// let countMinus = 0;
// for (let i = 0; i < numStr.length; i++) {
//   if (numStr[i] % 2 === 0) {
//     countPlus += 1;
//   } else {
//     countMinus += 1;
//   }
// }
// console.log("Кількість парних цифр:", countPlus);
// console.log("Кількість непарних цифр:", countMinus);
//------------------------------------------------//
// const srt = "abcde";
// console.log(srt.toUpperCase());
//------------------------------------------------//

// const str = "aaa bbb ccc";

// const words = str.split(" ");
// console.log(words);
// const upper = words
//   .map((word) => word[0].toUpperCase() + word.slice(1))
//   .join(" ");
// console.log(upper);
//------------------------------------------------//
