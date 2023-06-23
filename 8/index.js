//! Shallow copy, deep copy
// let obj = {name: "wba", info: {rooms: 2}};
// let copy1 = Object.assign({}, obj);
// let copy2 = structuredClone(obj);

//? Shallow copy
// copy1.name = "webbrain";
// copy1.info.rooms = 3;
// console.log(copy1, "1");
// console.log(obj, "real");

//? Deep copy
// copy2.name = "webbrain";
// copy2.info.rooms = 3;
// console.log(copy2, "2");
// console.log(obj, "real");

//! Object in object
// let grandfather = {
// 	name: "Eshmat",
// 	age: 80,
// 	child: {
// 		name: "Toshmat",
// 		age: 50,
// 		child: {
// 			name: "Xolmat",
// 			age: 20,
// 			child: {
// 				name: "Some",
// 				age: 1
// 			}
// 		}
// 	}
// }
// const sumAge = (obj) => {
// 	let result = 0;
// 	while(obj) {
// 		result += obj.age;
// 		obj = obj.child;
// 	}
// 	return result;
// }
// console.log(sumAge(grandfather));

//! Example
// let obj1 = {name: "Webbrain"};
// obj2 = obj1;
// obj1.name = "Academy";
// console.log(obj2);

//! Garbage collection
// let obj = {name: "Webbrain"};
// obj = {title: "Academy"};
// obj.name = "WBA";
// obj = "Webbrain";
// obj = 12;

//! Function in Object
// 1
// const obj = {
// 	name: "WBA",
// 	sayHi: function() {
// 		console.log("HI");
// 	}
// }
// obj.sayHi()
// 2
// const obj = {
// 	name: "WBA",
// 	sayHi: () => {
// 		// console.log("HI");
// 		return "Hi";
// 	}
// }
// console.log(obj.sayHi());
// 3
// const obj = {
// 	name: "WBA",
// 	sayHi() {
// 		console.log("HI");
// 	}
// }
// obj.sayHi()
// 4
// function sayHi() {
// 	console.log("Hi");
// }
// const obj = {
// 	name: "WBA",
// 	ourFunction: sayHi,
// }
// obj.ourFunction()

//! this
// this = window
// console.log(this);

// let obj = {
//   name: "Webbrain",
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   },
// };
// obj.sayHi();

// let obj = {
//   name: "Webbrain",
//   sayHi: () => {
//     console.log(`Hi ${this.name}`);
//   },
// };
// obj.sayHi();

// Arrow function da this ishlatish holati
// let obj = {
//   name: "Webbrain",
//   sayHi: function () {
//     return () => {
//       console.log(`Hi ${this.name}`);
//     };
//   },
// };
// obj.sayHi()();

//! Symbol
// let key = Symbol("himoyalangan");
// let obj = {
//   [key]: 12345,
// };
// console.log(obj.key);
// console.log(obj["key"]);
// console.log(key);
// console.log(key["Symbol(himoyalangan)"]);
// console.log(obj[key]);

//! Destructure => Qayta qurish
//? 1
// let obj = {
// 	name: "webbrain",
// 	title: "academy",
// 	founded: 2020,
// 	address: "Tashkent",
// 	status: "active"
// }
// console.log(obj.name);
// console.log(obj.title);
// console.log(obj.founded);
// console.log(obj.address);
// console.log(obj.status);
// const name = "Eshmat";
// const {name:school, title, founded, address, status} = obj;
// console.log(name);
// console.log(school);
// console.log(title);
// console.log(founded);
// console.log(address);
// console.log(status);

//? 2
// let grandfather = {
// 	name: "Eshmat",
// 	age: 80,
// 	child: {
// 		name: "Toshmat",
// 		age: 50,
// 	}
// }
// const {name, age, child: {name: childName, age: childAge}} = grandfather;
// console.log(name);
// console.log(age);
// console.log(childName);
// console.log(childAge);

// let grandfather = {
//   name: "Eshmat",
//   age: 80,
//   child: {
//     name: "Toshmat",
//     age: 50,
//     child: {
//       name: "Xolmat",
//       age: 20,
//       child: {
//         name: "Some",
//         age: 1,
//       },
//     },
//   },
// };

// const {
//   name,
//   age,
//   child: {
//     name: childName1,
//     age: childAge1,
//     child: {
//       name: childName2,
//       age: childAge2,
//       child: { name: childName3, age: childAge3 },
//     },
//   },
// } = grandfather;
// console.log(name);
// console.log(childName1);
// console.log(childName2);
// console.log(childName3);
// console.log(age);
// console.log(childAge1);
// console.log(childAge2);
// console.log(childAge3);

//! Spread operator
// let obj = {name: "webbrain", title: "academy", info: {room: 3}};
// let copy = {...obj};
// copy.name = "wba";
// copy.info.room = 2;
// console.log(copy, "copy");
// console.log(obj, "original");

//! Optional chaining
// let obj = {name: "webbrain", title: "academy", info: {room: 3}};
// obj = null;
// console.log(obj?.data?.fullName);

//! keys, values, entries
// let obj = {name: "webbrain", title: "academy", founded: 2020};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let grandfather = {
//   name: "Eshmat",
//   age: 80,
//   child: {
//     name: "Toshmat",
//     age: 50,
//     child: {
//       name: "Xolmat",
//       age: 20,
//       child: {
//         name: "Some",
//         age: 1,
//       },
//     },
//   },
// };
// console.log(Object.keys(grandfather));
// console.log(Object.values(grandfather));
// console.log(Object.entries(grandfather.child));





