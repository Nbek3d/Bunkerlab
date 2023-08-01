//! Proxy(target, handlerObj) => non-primitive
// const user = {
//   login: "eshmat",
//   password: 12345,
//   date: "26th July",
// };
//? get(target, prop), set(target, prop, value)
// const pUser = new Proxy(user, {
//   get(target, prop) {
//     if (prop === "password")
//       throw new Error("You can not access the password of user!");
//   	else return target[prop];
//   },
//   set(target, prop, value) {
//   	console.log("We are setting new value");
//   	if(prop === "password") throw new Error("You can not change the password of user!");
//   	else target[prop] = value;
//   }
//   deleteProperty(target, prop) {
//     console.log("We are deleting a value");
//     if (prop === "password")
//       throw new Error("You can not delete the password of user!");
//     else delete target[prop];
//   },
//   ownKeys(target) {
//   	return Object.keys(target).filter(k => !k.includes("p"));
//   },
//   has(target, prop) {
//   	if(prop === "password") return false;
//   	else return true;
//   }
// });
// console.log(user);
// console.log(pUser);
// console.log(user.login);
// console.log(pUser.login);
// console.log(pUser.date);
// console.log(pUser.password);

// pUser.login = "toshmat";
// pUser.name = "Toshmat";
// console.log(pUser);
// pUser.password = 54321;

// delete pUser.password;
// delete pUser.login;
// console.log(pUser);

// for(let key in pUser) {
// 	console.log(key);
// }

// console.log("login" in pUser);
// console.log("password" in pUser);
// console.log("date" in pUser);

//! Proxy with function
// const logMessage = (message) => `Logging: ${message}`;
// const pf = new Proxy(logMessage, {
//   apply(target, thisArg, params) {
// 		console.log("Our function is running...");
// 		return target.apply(thisArg, params).toUpperCase();
// 	},
// });
// console.log(pf("salom"));

//! Reflect
//? get(target, prop)
// console.log(Reflect.get(user, "login"));
//? set(target, prop, value)
// Reflect.set(user, "login", "toshmat");
// console.log(Reflect.get(user, "login"));
//? has(target, prop)
// console.log(Reflect.has(user, "password"));
//? ownKeys(target)
// console.log(Reflect.ownKeys(user));
//? deleteProperty(target, prop)
// Reflect.deleteProperty(user, "date");
// console.log(user);
