//! Creating an array
//? 1
// const arr = [
//   1,
//   "2",
//   true,
//   false,
//   undefined,
//   null,
//   { title: "webbrain" },
//   function sayHi() {
//     console.log("hi");
//   },
//   [],
// ];
// console.log(arr);
//? 2
// const arr = new Array(5);
// console.log(arr);
// const arr = new Array("5");
// console.log(arr);
// const arr = new Array({name: "webbrain"});
// console.log(arr);
// const arr = new Array(true);
// console.log(arr);
// const arr = new Array(1, 2, 3);
// console.log(arr);
// const arr = new Array({name: "wba"}, {title: "center"});
// console.log(arr);

//! length
// const arr = [
//   1,
//   "2",
//   true,
//   false,
//   undefined,
//   null,
//   { title: "webbrain" },
//   function sayHi() {
//     console.log("hi");
//   },
//   [],
// ];
// console.log(arr.length);
// const arr = new Array(5);
// console.log(arr.length);

//! Accessing
// const arr = [
//   1,
//   "2",
//   true,
//   false,
//   undefined,
//   null,
//   { title: "webbrain" },
//   function sayHi() {
//     console.log("hi");
//   },
//   [],
// ];
//? 1
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
//? 2
// console.log(arr.at(-1));
// console.log(arr.at(-2));

//! Changing
// const arr = [
//   1,
//   "2",
//   true,
//   false,
//   undefined,
//   null,
//   { title: "webbrain" },
//   function sayHi() {
//     console.log("hi");
//   },
//   [],
// ];
// arr[0] = "!";
// console.log(arr);

//! Adding
// let arr = [];
// arr[0] = 4;
// arr[1] = 2;
// arr[2] = 1;
// console.log(arr[0]);

//! Type
// const arr1 = [1, 2, 3];
// const arr2 = new Array(1, 2, 3);
// const str = "wba";
// console.log(typeof arr1);
// console.log(typeof arr2);
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(str));

//! Array => String (join())
// const arr = ["Webbrain", "Academy", "IT", "Center"];
// const str = arr.join();
// const str = arr.join("");
// const str = arr.join(" ");
// const str = arr.join("/");
// console.log(str);

//! Adding two array => concat()
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const arr4 = [10, 11, 12];
// const sum = arr1.concat(arr2, arr3, arr4);
// const sum = arr2.concat(arr1);
// console.log(arr1 + arr2);
// console.log(sum);

//! Comparison
// console.log([] == true);
// if([]) console.log("salom");
// console.log(null === 0);
// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null <= 0);
// console.log(null >= 0);

//! Loops
// const arr = ["birinchi", "ikkinchi", "uchinchi", "to'rtinchi"];
//? for
// for(let i = 0; i < arr.length; i++) {
// 	console.log(`${i} => ${arr[i]}`);
// }
//? for-in
// for(let index in arr) {
// 	console.log(`${index} => ${arr[index]}`);
// }
//? for-of
// for(let item of arr) {
// 	console.log(item);
// }

//! Methods
// let arr = [1, 2, 3];
// let arr1 = [344]
//? push()
// arr.push(4);
// console.log(arr);
//? unshift()
// arr.unshift(0);
// console.log(arr);
//? pop()
// arr.pop()
// console.log(arr);
//? shift()
// arr.shift()
// console.log(arr);
//? indexOf()
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(0));
//? reverse()
// arr.reverse();
// console.log(arr);
//? includes()
// console.log(arr.includes(1));
//? slice(startingIndex, endingIndex)
// const arr = ["birinchi", "ikkinchi", "uchinchi", "to'rtinchi"];
// const res = arr.slice(1, 3);
// console.log(res);
// console.log(arr);
//? splice(startingIndex, count, items)
// const arr = ["birinchi", "ikkinchi", "uchinchi", "to'rtinchi", "beshinchi"];
// arr.splice(1, 2);
// console.log(arr);
// arr.splice(1, 2, "second", "third", "some", "wba");
// console.log(arr);
// arr.splice(1, 0, "start")
// console.log(arr);
// arr.splice(2, 1);
// console.log(arr);

//! Practice
//? 1
// function dominator(arr) {
//   let result = {};
//   let dominator = -1;
//   for (let item of arr) {
//     result[item] ? result[item]++ : (result[item] = 1);
//   }
//   for (let key in result) {
//     if (result[key] > arr.length / 2) dominator = key;
//   }
//   return +dominator;
// }
// console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
//? 2
// const a = 1111;
// console.log(parseInt(a, 2));
// const binaryArrayToNumber = arr => parseInt(+arr.join(""), 2);
// console.log(binaryArrayToNumber([1,1,1,1]));