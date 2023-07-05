// nullish => mantiqiy operator
// || => or (mantiqiy qo'shish)
// && => and (mantiqiy ko'paytirish)

// 1
// console.log(true || true); // true
// console.log(true && true); // true
// console.log(true ?? true); // true
// undefined yoki null
// console.log(undefined ?? true); // true
// console.log(null ?? true); // true
// console.log(false ?? true); // false
// console.log(0 ?? true); // 0
// console.log(5 ?? true); // 5
// console.log(false ?? true); // false
// console.log(false || true); // true
// console.log(false && true); // false

// console.log(5 && 6 && 0); // falseni qidiradi

// Falsy => 0, undefined, null, NaN, "", false
// True => {}, true, number, " "

// console.log("webbrain" ?? "academy"); // webbrain
// console.log(("webbrain" ?? "academy") && "digital"); // digital

// if
// if (shart)
// if (shart) {}
// let age = 18;
// if(age >= 16) console.log("Passport berildi");
// if(age >= 16) {
// 	age = age - 5;
// 	console.log(age);
// }

// if(){} , else
// let age = 8;
// if(age >= 16) console.log("Passport berildi");
// else console.log("Passport berilmadi");

// Yil fasllari
// let season = "qish";
// 1
// if(season === "qish") console.log("sovuq");
// if(season === "bahor") console.log("iliq");
// if(season === "yoz") console.log("issiq");
// if(season === "kuz") console.log("salqin");

// if(season === "qish") console.log("sovuq");
// else if(season === "bahor") console.log("iliq");
// else if(season === "yoz") console.log("issiq");
// else if(season === "kuz") console.log("salqin");

// ichma-ich
// let age = 15;
// if(age >= 16) {
// 	console.log("Passport berilsin");
// 	if(age >= 18) {
// 		console.log("Prava berilsin");
// 	} else console.log("Prava berilmasin");
// } else console.log("Passport va prava berilmasin");

// logic operatorlar bilan if
// let age = 20;
// if(age >= 18) console.log("Prava va passport berilsin");
// else if (age < 18 && age >= 16) console.log("Passport berilsin");
// else console.log("Passport va prava berilmasin");

// svetofor
// let chiroq = "yashil";
// if(chiroq === "qizil") console.log("To'xta");
// else if(chiroq === "sariq") console.log("Tayyorlan");
// else if(chiroq === "yashil") console.log("Yur");

// ternary operator
// ? => if
// : => else
// let age = 15;
// age >= 16
//   ? console.log("Passport berilsin")
//   : console.log("Passport berilmasin");

// svetofor => ternary
// let chiroq = "yashila";
// chiroq === "qizil" ? console.log("To'xta") :
// chiroq === "sariq" ? console.log("Tayyorlan") :
// chiroq === "yashil" ? console.log("Yur") : console.log("Noto'g'ri chiroq");

// console.log(0 || 1);
// console.log(0 ?? 1);
// console.log(null || 1);
// console.log(null ?? 1);
// console.log("" || 1);
// console.log("" ?? 1);
// console.log(undefined || 1);
// console.log(undefined ?? 1);
// console.log(NaN || 1);
// console.log(NaN ?? 1);

// let result;
// let a = 2;
// let b = 2;

// a + b < 4 ? (result = "Below") : (result = "Over");
// console.log(result);

// let message;
// let login = "8776";

// login == "Employee"
//   ? (message = "Hello")
//   : login == "Director"
//   ? (message = "Greetings")
//   : login == ""
//   ? (message = "No login")
//   : (message = "");

// console.log(message);

// practice
// Musbat manfiy va juft toqlikka tekshirish
// let number = 7;
// if(number >= 0) {
// 	if(number % 2 === 0) console.log("Musbat juft");
// 	else console.log("Musbat toq");
// } else console.log("Manfiy");
// console.log(number);
// number >= 0
//   ? number % 2 === 0
//     ? console.log("Musbat juft")
//     : console.log("Musbat toq")
//   : console.log("Manfiy");
// console.log(number);

// Kabisa yili
// Kabisa yili => 366
// Kabisa yili emas => 365
// Kabisa yili => yil % 4 === 0
// Yil 100 lik =>  Kabisa yili => yil % 400 === 0

// let yil = 16;
// if (yil % 400 === 0) {
//   console.log(366);
// } else if (yil % 4 === 0 && yil % 100 !== 0) console.log(366);
// else console.log(365);

// yil % 400 === 0
//   ? console.log(366)
//   : yil % 4 === 0 && yil % 100 !== 0
//   ? console.log(366)
//   : console.log(365);

// let number = 102; // 1 - 999
// if (number < 10000) {
//   if (number % 2 === 0) {
//     if (number >= 100) {
//       console.log("Uch xonali juft son");
//     } else if (number >= 10) {
//       console.log("Ikki xonali juft son");
//     } else console.log("Bir xonali juft son");
//   } else {
//     if (number >= 100) {
//       console.log("Uch xonali toq son");
//     } else if (number >= 10) {
//       console.log("Ikki xonali toq son");
//     } else console.log("Bir xonali toq son");
//   }
// }

// number < 1000
//   ? number % 2 === 0
//     ? number >= 100
//       ? console.log("Uch xonali juft son")
//       : number >= 10
//       ? console.log("Ikki xonali juft son")
//       : console.log("Bir xonali juft son")
//     : number >= 100
//     ? console.log("Uch xonali toq son")
//     : number >= 10
//     ? console.log("Ikki xonali toq son")
//     : console.log("Bir xonali toq son")
//   : console.log("1000 dan katta son kiritildi");

// the end