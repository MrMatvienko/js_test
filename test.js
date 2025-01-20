// const arr = [1, 2, 4, 5, 8];
// arr2 = [];
// arr.map((item) => arr2.push(item));
// console.log(arr2);
// console.log(arr.slice());
// console.log(Array.from(arr));
// console.log(...arr);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const cube = document.querySelector(".cube");
// cube.addEventListener("click", toggleRotation);
// let rotate = 0;
// let isRotation = false;
// let lastTimes = 0;
// let colorInterval;
// let scaleInterval;
// let isScalingUp = false;
// let currentScale = 1;
// const rotationSpeed = 1;

// function toggleRotation() {
//   if (!isRotation) {
//     isRotation = true;

//     colorInterval = setInterval(() => {
//       const randomColor = getRandomHexColor();
//       cube.style.backgroundColor = randomColor;
//     }, 2000);

//     scaleInterval = setInterval(() => {
//       currentScale = isScalingUp ? 1.5 : 1;
//       isScalingUp = !isScalingUp;
//       cube.style.transform = `scale(${currentScale}) rotate(${rotate}deg)`;
//     }, 2000);

//     requestAnimationFrame(rotateCube);
//   } else {
//     isRotation = false;
//     clearInterval(colorInterval);
//     clearInterval(scaleInterval);
//   }
// }

// function rotateCube() {
//   if (!isRotation) return;
//   rotate += rotationSpeed;
//   // console.log(rotate);

//   cube.style.transform = `scale(${currentScale}) rotate(${rotate}deg)`;

//   requestAnimationFrame(rotateCube);
// }

// a = -5;

// if (a < 0) {
//   console.log(`Ваше число ${a} - від'ємне`);
// } else {
//   console.log(`Ваше число ${a} - дадатнє`);
// }
// ------------------------------------------------//

// stroke = "Elevator";
// console.log(stroke.length);
// ------------------------------------------------//

// a = 10;

// if (a % 2 === 0) {
//   console.log(`Ваше число ${a} - парне`);
// } else {
//   console.log(`Ваше число ${a} - не парне`);
// }
// ------------------------------------------------//
// const a = "Amanda";
// const b = "Jack";

// if (a.slice(0, 1) === b.slice(0, 1)) {
//   console.log("First leter a = first leter b");
// } else {
//   console.log("First leter a != first leter b");
// }
// ------------------------------------------------//

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

// function sumAll(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum = sum + num;
//   }
//   console.log(sum);
// }

// console.log(sumAll(1, 2, 3)); // 6
// console.log(sumAll(5, 10, 15, 20)); // 50

//------------------------------------------------//

// function getNames(firstName, ...rest) {
//   return {
//     name: firstName,
//     rest: rest,
//   };
// }
// console.log(getNames("John", "Doe", "Smith", "Taylor"));
// // { name: 'John', rest: ['Doe', 'Smith', 'Taylor'] }

//------------------------------------------------//
// function filterEven(...numbers) {
//   let mus = [];
//   for (let num of numbers) {
//     if (num % 2 === 0) {
//       mus.push(num);
//     }
//   }
//   return mus;
// }

// console.log(filterEven(1, 2, 3, 4, 5, 6)); // [2, 4, 6]

//------------------------------------------------//
// function addItems(arr, ...newItems) {
//   return arr.concat(newItems);
// }

// console.log(addItems([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

//------------------------------------------------//
// function mergeArrays(...arrays) {
//   let mergedArray = [];

//   for (let arr of arrays) {
//     if (Array.isArray(arr)) {
//       mergedArray = mergedArray.concat(arr);
//     } else {
//       console.log(`${arr} не є масивом і не буде доданий`);
//     }
//   }

//   return mergedArray;
// }
// console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]

//------------------------------------------------//

// function copyArray(arr) {
//   return [...arr];
// }

// const originalArray = [1, 2, 3];
// const copiedArray = copyArray(originalArray);

// console.log(copiedArray);
// console.log(copiedArray === originalArray);

//------------------------------------------------//

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

//------------------------------------------------//
// function squareNumbers(numbers) {
//   return numbers.map((item) => item ** 2);
// }
// console.log(squareNumbers([1, 2, 3, 4])); // Виведе: [1, 4, 9, 16]

//------------------------------------------------//
// function filterEvenNumbers(numbers) {
//   return numbers.filter((item) => item % 2 === 0);
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе: [2, 4, 6]
//------------------------------------------------//
// function findFirstNegative(numbers) {
//   return numbers.find((item) => item < 0);
// }

// console.log(findFirstNegative([3, 7, -2, 5, -8])); // Виведе: -2
//------------------------------------------------//

// function areAllPositive(numbers) {
//   // Поверніть true, якщо всі числа додатні
//   return numbers.every((item) => item > 0);
// }

// console.log(areAllPositive([2, 4, 6, 8])); // Виведе: true
// console.log(areAllPositive([2, -4, 6, 8])); // Виведе: false

//------------------------------------------------//
// function joinNames(names) {
//   // Поверніть один рядок з іменами, з'єднаними комами
//   return names.join(", ");
// }

// console.log(joinNames(["John", "Jane", "Doe"])); // Виведе: 'John, Jane, Doe'

//------------------------------------------------//

// function countOccurrences(arr, element) {
//   // Поверніть кількість входжень елемента в масив
//   return arr.reduce((count, current) => {
//     if (current === element) {
//       count++;
//     }
//     return count;
//   }, 0);
// }

// console.log(countOccurrences([1, 2, 3, 4, 3, 2, 3], 3)); // Виведе: 3

//------------------------------------------------//

// function arrayToObject(entries) {
//   // Поверніть об'єкт, створений з масиву пар [ключ, значення]
//   return entries.reduce((obj, [key, value]) => {
//     obj[key] = value; // Додаємо нову властивість до об'єкта
//     return obj;
//   }, {});
// }

// console.log(
//   arrayToObject([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ])
// );
// Виведе: { a: 1, b: 2, c: 3 }
//------------------------------------------------//

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Виведе: [1, 2, 3, 4, 5]

//------------------------------------------------//

// function getSubarray(arr, startIndex, endIndex) {
//   // Поверніть частину масиву між індексами startIndex і endIndex
//   return arr.slice(startIndex, endIndex);
// }

// console.log(getSubarray([10, 20, 30, 40, 50], 1, 4)); // Виведе: [20, 30, 40]

//------------------------------------------------//

// function hasEvenNumber(numbers) {
//   // Поверніть true, якщо в масиві є хоча б одне парне число
//   return numbers.some((number) => number % 2 === 0);
// }

// console.log(hasEvenNumber([1, 3, 5, 7, 8])); // Виведе: true
// console.log(hasEvenNumber([1, 3, 5, 7])); // Виведе: false

//------------------------------------------------//
// function logElements(arr) {
//   // Виведіть кожен елемент масиву в консоль
//   arr.forEach((element) => {
//     console.log(element);
//   });
// }

// logElements([1, 2, 3, 4]);
//------------------------------------------------//
// function sumArray(arr) {
//   let sum = 0;
//   arr.forEach((el) => {
//     sum += el;
//   });
//   return sum;
// }

// console.log(sumArray([5, 10, 15])); // Виведе: 30

//------------------------------------------------//
// function convertToUpperCase(arr) {
//   let upperCaseArr = [];
//   // Перетворіть кожен рядок на великий регістр і додайте до upperCaseArr
//   arr.forEach((el) => {
//     upperCaseArr.push(el.toUpperCase());
//   });
//   return upperCaseArr;
// }

// console.log(convertToUpperCase(["hello", "world"])); // Виведе: ['HELLO', 'WORLD'

//------------------------------------------------//

// function arrayToObj(arr) {
//   let obj = {};
//   // Перетворіть масив пар [ключ, значення] на об'єкт
//   arr.forEach(([key, value]) => {
//     obj[key] = value;
//   });
//   return obj;
// }

// console.log(
//   arrayToObj([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ])
// );
// Виведе: { a: 1, b: 2, c: 3 }

//------------------------------------------------//
// function incrementArray(arr) {
//   // Збільшіть кожен елемент масиву на 1
//   arr.forEach((item, index) => {
//     arr[index] = item + 1; // Збільшуємо кожен елемент на 1
//   });
// }

// let numbers = [1, 2, 3, 4];
// incrementArray(numbers);
// console.log(numbers); // Виведе: [2, 3, 4, 5]
//------------------------------------------------//

// function checkEvenNumbers(arr) {
//   let allEven = true;
//   arr.forEach((number) => {
//     if (number % 2 !== 0) {
//       console.log("Масив містить непарне число");
//       allEven = false;
//     }
//   });
//   if (allEven) {
//     console.log("Всі числа парні");
//   }
// }
// checkEvenNumbers([6, 0, 8, 4]);
//------------------------------------------------//
// function calculateLengths(arr) {
//   arr.forEach((item) => {
//     console.log(item.length);
//   });
// }
// calculateLengths(["hello", "worlooo"]);
//------------------------------------------------//
// function addProperty(arr) {
//   arr.forEach((element, index) => {
//     const newObj = {
//       id: index,
//       ...element,
//     };
//     // Оновлюємо елемент масиву
//     arr[index] = newObj;
//   });

//   console.log(arr);
// }
// addProperty([
//   { name: "Alex" },
//   { name: "Anna" },
//   { name: "Amanda" },
//   { name: "Avrora" },
// ]);
//------------------------------------------------//

// function sortNumbers(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortNumbers([4, 2, 5, 1, 7]));

//------------------------------------------------//

// function filterEvenNumbers(arr) {
//   return arr.filter((item) => item % 2 === 0);
// }
// console.log(filterEvenNumbers([4, 2, 5, 1, 7]));
//------------------------------------------------//

// function findElement(arr, string) {
//   return arr.find((item) => item.name === string);
// }
// console.log(
//   findElement(
//     [
//       { name: "Alex" },
//       { name: "Anna" },
//       { name: "Amanda" },
//       { name: "Avrora" },
//     ],
//     "Amanda"
//   )
// );

//------------------------------------------------//

// function transformArray(arr) {
//   return arr.map((item) => item * 5);
// }
// console.log(transformArray([4, 2, 5, 1, 7]));

//------------------------------------------------//

// function sumArray(arr) {
//   return arr.reduce((acum, item) => acum + item, 0);
// }
// console.log(sumArray([4, 2, 5, 1, 7]));

//------------------------------------------------//

// function findElement(arr) {
//   return arr.map((item) => item.name).filter((name) => name !== undefined);
// }
// console.log(
//   findElement([
//     { name: "Alex" },
//     { female: "Anna" },
//     { name: "Amanda" },
//     { shop: "Avrora" },
//   ])
// );

//------------------------------------------------//

// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([4, 2, 5, 1, 7]));

//------------------------------------------------//
// function findMax(arr) {
//   return arr.includes(2);
// }
// console.log(findMax([4, 2, 5, 1, 7]));
//------------------------------------------------//
// function findIndex(arr, number) {
//   return arr.findIndex((item) => item === number);
// }
// console.log(findIndex([4, 2, 5, 1, 7], 7));
//------------------------------------------------//

// function mergeArrays(arr, arr1) {
//   return [...new Set(arr.concat(arr1))];
// }
// console.log(mergeArrays([4, 2, 5, 1, 7], [3, 4, 9, 0, 6]));

//------------------------------------------------//
// function splitWords(str) {
//   return str.split(" ");
// }

// console.log(splitWords("Hello world, welcome to JavaScript"));
//------------------------------------------------//

// function findCommonElements(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// }

// console.log(findCommonElements([1, 2, 3], [2, 3, 4]));

//------------------------------------------------//
// function extractValues(arr, key) {
//   return arr.map((item) => item[key]);
// }

// console.log(extractValues([{ a: 1 }, { a: 2 }, { a: 3 }], "a"));
//------------------------------------------------//

// function average(arr) {
//   return arr.reduce((acum, prev) => acum + prev, 0) / arr.length;
// }

// console.log(average([2, 4, 6, 8]));

//------------------------------------------------//
// function filterByLength(arr, n) {
//   return arr.filter((item) => item.length >= n);
// }

// console.log(filterByLength(["apple", "banana", "cherry", "date"], 5));

//------------------------------------------------//

// function objectToString(arr) {
//   return arr.map((obj) => Object.values(obj).join(" "));
// }

// console.log(
//   objectToString([
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//   ])
// );
// Виведе: ["John 30", "Jane 25"]

//------------------------------------------------//
// function numbersToStrings(arr) {
//   return arr.map((item) => item.toString());
// }

// console.log(numbersToStrings([1, 2, 3, 4]));

//------------------------------------------------//
// function removeElement(arr, value) {
//   return arr.filter((item) => item !== value);
// }

// console.log(removeElement([1, 2, 3, 4, 3], 3));

//------------------------------------------------//
// function countOccurrences(arr, value) {
//   return arr.filter((item) => item === value).length;
// }

// console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));

// function countOccurrences(arr, value) {
//   return arr.reduce((count, item) => {
//     return item === value ? count + 1 : count;
//   }, 0);
// }
// console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));

//------------------------------------------------//

// function mergeMultipleArrays(...arrays) {
//   return arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
// }

// console.log(mergeMultipleArrays([1, 2], [3, 4], [5, 6]));
// Виведе: [1, 2, 3, 4, 5, 6]
//------------------------------------------------//
// function findMin(arr) {
//   return Math.min(...arr);
// }

// console.log(findMin([10, 5, 3, 8, 2]));

//------------------------------------------------//
// function isAllNumbers(arr) {
//   return arr.every((item) => typeof item === "number");
// }

// console.log(isAllNumbers([1, 2, 3, 4]));
// // Виведе: true

// console.log(isAllNumbers([1, 2, "3", 4]));
// // Виведе: false

//------------------------------------------------//

// function arrayToObject(arr) {
//   return arr.reduce((obj, [key, value]) => {
//     obj[key] = value;
//     return obj;
//   }, {});
// }

// console.log(
//   arrayToObject([
//     ["name", "John"],
//     ["age", 30],
//     ["city", "New York"],
//   ])
// );
// Виведе: { name: "John", age: 30, city: "New York" }

//------------------------------------------------//

// function filterAndMap(arr) {
//   return arr.filter((item) => item % 2 === 0).map((item) => item ** 2);
// }

// console.log(filterAndMap([1, 2, 3, 4, 5, 6]));
// Виведе: [4, 16, 36]
//------------------------------------------------//

// function areAllUnique(arr) {
//   return arr.every((item, index) => arr.indexOf(item) === index);
// }

// console.log(areAllUnique([1, 2, 3, 4]));
// // Виведе: true

// console.log(areAllUnique([1, 2, 2, 4]));
// Виведе: false

//------------------------------------------------//
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// // Виведе: [1, 2, 3, 4, 5]
//------------------------------------------------//
// function findMin(arr) {
//   return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
// }

// console.log(findMin([5, 3, 9, 1, 7]));
// Виведе: 1
//------------------------------------------------//

// function joinStrings(arr) {
//   return arr.join(" ");
// }

// console.log(joinStrings(["Hello", "world", "this", "is", "JavaScript"]));
// // Виведе: "Hello world this is JavaScript"
//------------------------------------------------//

// const user = {
//   name: "Alice",
//   delayedGreet: function () {
//     setTimeout(() => {
//       console.log(`Hello, my name is ${this.name}`);
//     }, 1000);
//   },
// };

// user.delayedGreet(); // Очікується: 'Hello, my name is Alice' через 1 секунду
//------------------------------------------------//
// const person1 = { name: "Bob" };
// const person2 = { name: "Charlie" };

// function introduce() {
//   console.log(`Hi, I am ${this.name}`);
// }
// introduce.call(person1);
// introduce.call(person2);

// Викличте функцію introduce для обох об'єктів person1 та person2, використовуючи call
//------------------------------------------------//
// function sum(a, b) {
//   return a + b;
// }

// const numbers = [5, 10];

// const result = sum.apply(null, numbers);
// console.log(result);

// Викличте функцію sum за допомогою apply, передавши масив numbers
//------------------------------------------------//
// const counter = {
//   count: 0,
//   start: function () {
//     setInterval(() => {
//       this.count++;
//       console.log(this.count);
//     }, 4000);
//   },
// };

// counter.start();
//------------------------------------------------//
// function doubleValues(arr) {
//   return arr.map((item) => item * 2);
// }
// console.log(doubleValues([1, 2, 4, 6, 2]));
// //------------------------------------------------//

// function findWord(arrString, searchWord) {
//   return arrString.includes(searchWord);
// }
// console.log(findWord(["Anna", "Ben", "Susan"], "Ben"));
// //------------------------------------------------//
// function findWord2(removeEmptyStrings) {
//   return removeEmptyStrings.filter((item) => item.trim() !== "");
// }
// console.log(findWord2(["Anna", "Ben", "Susan", " "]));

// //------------------------------------------------//

// function getNames(arrOb) {
//   return arrOb.map((item) => item.name);
// }
// console.log(getNames([{ name: "Anna" }, { name: "Sam" }]));
// // //------------------------------------------------//

// function countOccurrences(arrElement, element) {
//   return arrElement.reduce((totalCount, item) => {
//     return item === element ? totalCount + 1 : totalCount;
//   }, 0);
// }
// console.log(countOccurrences(["Anna", "Ben", "Susan", "Anna", "Anna"], "Anna"));

//------------------------------------------------//

// function getSum(arr) {
//   return arr.reduce((sum, item) => {
//     if (item > 0 && item < 10) {
//       return sum + item;
//     }
//     return sum;
//   }, 0);
// }
// console.log(getSum([1, 10, 1, -2]));
//------------------------------------------------//

// const getSomeNumber = function (arr) {
//   return arr.some(function (item) {
//     return item < 0;
//   });
// };

// console.log(getSomeNumber([3, 2, -1, 0]));

//------------------------------------------------//

// function getArray(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(getArray([1, 23, 4], [2, 4, 2]));

// //------------------------------------------------//

// function getSum(...arr) {
//   return arr.reduce((acc, item) => acc + item, 0);
// }
// console.log(getSum(2, 3, 1, 4));

// //------------------------------------------------//

// function getArrcopy(obj) {
//   return { ...obj };
// }
// console.log(getArrcopy({ name: "Anna" }));

// //------------------------------------------------//

// function removeFirstElement(...arr) {
//   const [, ...rest] = arr;
//   return rest;
// }

// console.log(removeFirstElement(1, 2, 3, 4, 5));

// //------------------------------------------------//

// function newObj(obj, key, value) {
//   return {
//     ...obj,
//     [key]: value,
//   };
// }
// console.log(newObj({ name: "Alex", age: 25 }, "age", 30));
//------------------------------------------------//
// console.log(num);
// var num;
//------------------------------------------------//
//---POLINDROME-----//
// const isPolindrom = (str) => {
//   return str === str.split("").reverse().join("");
// };
// console.log(isPolindrom("OTTO"));

//------------------------------------------------//
// const users = [
//   { id: "id1a", name: "Livvi Doe", location: "Michigan" },
//   { id: "id2b", name: "Jane Doe", location: "Alabama" },
//   { id: "id3c", name: "Sean Doe", location: "Michigan" },
//   { id: "id4d", name: "Kate Doe", location: "California" },
// ];
// const online = [
//   { id: "id1a", isOnline: true },
//   { id: "id3c", isOnline: true },
//   { id: "id5e", isOnline: false },
//   { id: "id4d", isOnline: true },
// ];

// function getUserOnline(users, online, location) {
//   onlineUser = [];
//   online.forEach((user) => user.isOnline && onlineUser.push(user.id));
//   console.log(onlineUser);
//   const userFilter = users.filter((user) => {
//     return user.location === location && onlineUser.includes(user.id);
//   });
//   return userFilter;
// }
// console.log(getUserOnline(users, online, "Michigan"));

//------------------------------------------------//

// const students = [
//   { id: "st1", name: "John Doe", age: 20, group: "A" },
//   { id: "st2", name: "Jane Smith", age: 22, group: "B" },
//   { id: "st3", name: "Emily Johnson", age: 19, group: "A" },
//   { id: "st4", name: "Michael Brown", age: 21, group: "C" },
//   { id: "st5", name: "Sarah Lee", age: 23, group: "B" },
// ];

// const completedCourses = [
//   { id: "st1", hasCompleted: true },
//   { id: "st2", hasCompleted: false },
//   { id: "st3", hasCompleted: true },
//   { id: "st5", hasCompleted: true },
// ];

// function getStudentsCompletedCourses(students, completedCourses, group) {
//   let compileted = [];
//   completedCourses.forEach(
//     (student) => student.hasCompleted && compileted.push(student.id)
//   );
//   console.log(compileted);
//   return students.filter((student) => {
//     return student.group === group && compileted.includes(student.id);
//   });
// }
// console.log(getStudentsCompletedCourses(students, completedCourses, "A"));
//------------------------------------------------//
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 600 },
//   { id: 4, name: "Monitor", price: 300 },
// ];

// function getAffordableProducts(products, maxPrice) {
//   return products.filter(
//     (product) => product.price === maxPrice || product.price < maxPrice
//   );
// }

// console.log(getAffordableProducts(products, 600));
//------------------------------------------------//
// const students = [
//   { id: 1, name: "Alice", age: 22 },
//   { id: 2, name: "Bob", age: 19 },
//   { id: 3, name: "Charlie", age: 23 },
//   { id: 4, name: "David", age: 21 },
// ];
// function getYoungestStudent(students) {
//   const youngestStudent = students.reduce((young, student) => {
//     return student.age < young.age ? student : young;
//   });
//   return youngestStudent;
// }
// console.log(getYoungestStudent(students));

//------------------------------------------------//
// const strings = ["hello", "world", "javascript", "developer"];

// function countChar(strings, char) {
//   return strings.join("").split(char).length - 1;
// }
// console.log(countChar(strings, "o"));
//------------------------------------------------//
// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 20 },
//   { name: "Eve", age: 40 },
// ];

// function groupByAge(users) {
//   let ageArr = [];
//   users.forEach((user) => ageArr.push(user.age));
//   console.log(ageArr);
//   const groupAge = [...new Set(ageArr)];
//   console.log(groupAge);

//   let group = {};
//   groupAge.forEach((age) => {
//     group[age] = users.filter((user) => user.age === age);
//   });
//   return group;
// }

// console.log(groupByAge(users));
//------------------------------------------------//
// const votes = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Bob", "Alice"];

// function countVotes(votes) {
//   let counVoice = {};
//   votes.forEach((item) => {
//     counVoice[item] = (counVoice[item] || 0) + 1;
//     console.log(counVoice);
//   });
//   return counVoice;
// }

// console.log(countVotes(votes));
//------------------------------------------------//
// function countCharacters(str) {
//   let countSymbol = {};
//   str.split("").forEach((char) => {
//     countSymbol[char] = (countSymbol[char] || 0) + 1;
//   });
//   return countSymbol;
// }

// console.log(countCharacters("javascript"));

//------------------------------------------------//
// function getUniqueValues(arr) {
//   return [...new Set(arr)];
// }

// console.log(getUniqueValues([1, 2, 3, 4, 3, 2, 5]));
//------------------------------------------------//

// function areAnagrams(str1, str2) {
//   const st1 = str1.split("").sort().join("");
//   console.log(st1);
//   const st2 = str2.split("").sort().join("");
//   console.log(st2);
//   return st1 === st2;
// }

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false
//------------------------------------------------//
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));
//------------------------------------------------//
// function findMax(arr) {
//   return Math.max(...arr);
// }

// console.log(findMax([3, 5, 1, 9, 2]));
//------------------------------------------------//
// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
//------------------------------------------------//
// function mergeAndSort(arr1, arr2) {
//   return arr1.concat(arr2).sort();
// }

// console.log(mergeAndSort([3, 5, 1], [9, 2, 8]));
//------------------------------------------------//
// function objectToArray(obj) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 1, b: 2, c: 3 }));
//------------------------------------------------//
// function findIndex(arr, value) {
//   return arr.findIndex((item) => item === value);
// }

// console.log(findIndex([1, 2, 3, 4], 3)); // 2
// console.log(findIndex([1, 2, 3, 4], 5)); // -1
//------------------------------------------------//
// function getEvenNumbers(arr) {
//   return arr.filter((item) => item % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
//------------------------------------------------//
// function capitalizeFirstLetter(str) {
//   const strMus = str.split(" ");
//   const capitalizedWords = strMus.map((item) => {
//     return item.charAt(0).toUpperCase() + item.slice(1);
//   });
//   return capitalizedWords.join(" ");
// }

// console.log(capitalizeFirstLetter("hello world from javascript"));
//------------------------------------------------//
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
// ];

// function sortByProperty(arr, prop) {
//   return arr.sort((a, b) => a[prop] - b[prop]);
// }

// console.log(sortByProperty(users, "age"));
//------------------------------------------------//
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(7)); // true
// console.log(isPrime(12)); // false
//------------------------------------------------//
// var list = ["Дельта", "альфа", "ЧАРЛИ", "браво"];

// // временный массив содержит объекты с позицией и значением сортировки
// var mapped = list.map(function (el, i) {
//   return { index: i, value: el.toLowerCase() };
// });
// console.log(mapped);

//------------------------------------------------//
// const str = "a";
// if (str.length > 1) {
//   const b = str.length - 2;
//   console.log(str[b]);
// } else {
//   console.log("у строці меньше одного символу");
// }

//------------------------------------------------//
// const a = 27;
// const b = 4;

// if (a % b === 0) {
//   console.log("Ділиться без остачі");
// } else {
//   console.log("Ділиться з остачею");
// }

//------------------------------------------------//
// const a = 12345;

// console.log(parseInt(a.toString().split("").reverse().join("")));
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//

// const mus = [2, 1, 4, 1];
// let mus2 = [];
// for (let num of mus) {
//   console.log(num);
//   mus2.push(num + 1);
// }
// console.log(mus2);
