// Object => 1.key, 2.value
// Object creating
// 1
// let obj1 = {
// 	title: "webbrain",
// 	name: "academy"
// }
// console.log("1" ,obj1);
// 2
// let obj2 = new Object({name: "webbrain", title: "academy"})
// console.log("2" ,obj2);

// Accessing to object keys and value
// let person = {
// 	name: "eshmat",
// 	age: 20
// }
// 1. Static
// console.log(person.name);
// console.log(person.age);
// 2. Dynamic
// console.log(person["name"]);
// console.log(person["age"]);
// let ism = "age";
// console.log(person.ism);
// console.log(person[ism]);

// Deleting, creating and changing
// person.age = 25;
// person["name"] = "toshmat";
// console.log(person);

// person.surname = "eshmatov";
// console.log(person.surname);
// console.log(person);

// delete person.age;
// console.log(person);

// Object.freeze()
// let person = {
// 	name: "eshmat",
// 	age: 20
// }
// Object.freeze(person);
// person.age = 25;
// person.surname = "eshmatov";
// delete person.age;
// console.log(person);

// Object.seal()
// let person = {
// 	name: "eshmat",
// 	age: 20
// }
// Object.seal(person);
// person.age = 25;
// person.surname = "eshmatov";
// delete person.age;
// console.log(person);

// structuredClone()
// let person = {
// 	name: "eshmat",
// 	age: 20
// }
// let human = person;
// let clone = structuredClone(person);
// console.log(person === human);
// console.log(person === clone);
// console.log(person == clone);

// Abbriviation
// let name = "webbrain";
// let founded = 2020;
// let obj = {
// 	name,
// 	founded
// }
// console.log(obj);

// in
// let searchInfo = "founded";
// let person = {
// 	name: "eshmat",
// 	age: 20
// }
// console.log("name" in person);
// console.log(searchInfo in person);

// for()
// let person = {
// 	name: "eshmat",
// 	surname: "toshmatov",
// 	birthYear: 2000,
// 	job: "programmer"
// }
// for(let kalit in person) {
// 	console.log(kalit, "=>", person[kalit]);
// }

// Adding => Object.assign()
// let data = {
//   title: "some text",
//   title: "text",
//   founded: 2023,
// };
// console.log(data, "data");

// let info = {
//   title: "lorem ipsum 2",
//   content: "lorem ipsum 3",
// };
// console.log(data + info);
// let newObj = Object.assign(data, info, { age: 20 });
// console.log(newObj);

// Method
// let square = {
// 	width: 20,
// 	height: 50,
// 	getArea: function(a, b) {
// 		return a * b;
// 	}
// }
// console.log(square.getArea(square.width, square.height));
// let person = {
// 	firstName: "Eshmat",
// 	lastName: "Toshmatov",
	// getFullName: function(a, b) {
	// 	return `${a} ${b}`;
	// }
	// getFullName: (a, b) => {
	// 	return `${a} ${b}`;
	// }
// }
// console.log(person.getFullName(person.firstName, person.lastName));


// Practice
// 1
// let salaries = {
//   john: 100,
//   ann: 160,
// 	pete: 130
// };
// function getSum(obj) {
// 	let sum = 0;
// 	for(let user in obj) {
// 		sum += obj[user]
// 	}
// 	return sum;
// }
// console.log(getSum(salaries));

// 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(obj) {
// 	for(let key in obj) {
// 		if(typeof obj[key] === "number") {
// 			obj[key] *= 2;
// 		}
// 	}
// 	return obj;
// }
// console.log(multiplyNumeric(menu));

// 3
// let company = {
//   sales: {
//     manager: 1000,
//     salesMan: 500,
//   },
//   development: {
//     frontend: 3000,
//     backend: 2000,
//     mobile: 3000,
//   },
//   service: {
//     operator: 7000,
//   },
// };
// function getTotal(obj) {
//   for (let section in obj) {
//     if (section === "development") {
//       for (let job in obj[section]) {
//         obj[section][job] *= 2;
//       }
//     }
//   }
// 	return obj
// }
// console.log(getTotal(company));