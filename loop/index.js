// console.log(1);
// console.log(2);
// ...

// while (condition) { }
// 1 - 100 gacha sonlar
// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i = i + 1; // i += 1
// }
// console.log(i); // 101
// 1 - 100 juft sonlar
// let i = 1;
// while (i <= 100) {
//     if (i % 2 === 0) console.log(i);
//     i = i + 1; // i += 1
// }

// cheksiz while vs break
// 1 - sabab(shartni qanoatlantirmaslik)
// let i = 1;
// while (i >= 1) {
//     console.log("Ishladi");
// }
// 2 - sabab
// let i = 1;
// while (typeof i === "number") {
//     console.log("Ishladi");
// }
// break
// let i = 1;
// while (true) {
//     if (i === 10) break;
//     console.log(i);
//     i += 1;
// }

// do { } while (condition)
// let i = 1;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 1);
// console.log(i, "tashqarida");

// i = 2; => var bulib ketadi
// for (i = 1, condition, i++) { }
// toq son topish(1 - 100)
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

// continue vs break
// for (let i = 1; i <= 10; i += 2) {
//     if (i !== 5) console.log(i);
// }
// for (let i = 1; i <= 10; i += 2) {
//     if (i === 5) continue;
//     console.log(i);
// }
// for (let i = 1; i <= 10; i += 2) {
//     if (i === 5) break;
//     console.log(i);
// }

// Guruh => 10 tadan
// Birinchi => 1
// Birinchi => ...
// Birinchi => 10
// Ikkinchi => 11
// Ikkinchi => ...
// Ikkinchi => 20
// Uchinchi => 21
// Uchinchi => ...
// Uchinchi => 30

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 30; j++) {
//         if (i === 1 && (j >= 1 && j <= 10)) {
//             console.log(`Birinchi => ${j}`);
//         }
//         else if (i === 2 && ((j >= 11 && j <= 20))) {
//             console.log(`Ikkinchi => ${j}`);
//         } else if ((j >= 21 && j <= 30)) console.log(`Uchinchi => ${j}`);
//     }
// }

// 1 - 100 bo'lgan tub sonlarni toping
// 1
// let n = 100,
//     t = "-tup son",
//     m = "-murakkab son";
// for (let i = 1; i <= n; i++) {
//     if (i == 1) {
//         console.log("1-na tub na murakkab");
//     } else if (i < 6 && i > 1) {
//         if (i == 2 || i == 3 || i == 5) {
//             console.log(i + t);
//         } else {
//             console.log(i + m);
//         }
//     } else {
//         if (i % 6 == 1 || i % 6 == 5) {
//             let ildiz = Math.floor(Math.sqrt(i)),
//                 b;
//             for (let j = 2; j <= ildiz; j++) {
//                 if (i % j == 0) {
//                     b = true;
//                     break;
//                 } else {
//                     b = false;
//                 }
//             }
//             b ? console.log(i + m) : console.log(i + t);
//         } else console.log(i + m);
//     }
// }

// 2
// for (let i = 1; i <= 100; i++) {
//     let buluvchiSoni = 0;
//     for (let j = 1; j < i; j++) {
//         if (i % j === 0) {
//             buluvchiSoni = buluvchiSoni + 1;
//         }
//     }
//     if (buluvchiSoni >= 2) console.log(`${i} - Murakkab`);
//     else console.log(`${i} - Tub`);
// }
// 3
// for (let i = 2; i <= 100; i++) {
//     let tubMi = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             tubMi = false;
//             break;
//         }
//     }
//     tubMi ? console.log(`${i} - tub`) : console.log(`${i} - murakkab`);
// }

// for => 9 // 1 + 4 + 9 + 16 + 25
// let a = 1;
// let b = 5;
// let result = 0;
// for (let i = a; i <= b; i++) {
//     result += i * i;
// }
// console.log(result);

// for => 36
// let k = 2, n = 5, sum = 0; // 1 ^ k + 2 ^ k + ... + n ^ k // 1 ^ 2 + 2 ^ 2 + .. 4 ^ 2 + 5 ^2
// for (let i = 1; i <= n; i++) {
//     let res = 1;
//     for (let j = 1; j <= k; j++) {
//         res *= i;
//     }
//     sum += res;
// }
// console.log(sum);

// 3 va 6
// 3, 4, 4, 5, 5, 5, 6, 6, 6, 6
// let a = 10, b = 15;
// let sum = 1;
// for (let i = a + 1; i < b; i++) {
//     for (let j = 1; j <= sum; j++) {
//         console.log(i);
//     }
//     sum += 1;
// }

// Prefix vs postfix
// let a = 1, b = 1;
// console.log(++a);
// console.log(b++);
// console.log(b);

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

// Faktorial => 3! = 1 * 2 * 3
// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     result *= i;
// }
// console.log(result);

// k n ?
//     1 + 2 + n <= k
// while (condition);
// for (i i < ; i++);
// let k = 100, sum = 0; // 55 + 11 + 12 + 13 + 14
// let i = 1;
// while (sum <= k) {
//     sum += i;
//     i++;
// }
// let result = i - 2;
// console.log(result);

// cheksiz for
// 1
// for (let i = 1; ; i++) {
//         console.log("Ishladi");
//     }
// 2
// for (let i = 1; i < 10;) {
//     console.log("Ishladi");
// }
// 3
// for (; ;) {
//     console.log("Ishladi");
// }