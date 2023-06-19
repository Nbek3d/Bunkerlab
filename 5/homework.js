// 10

// let n = 2, sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }

// console.log(sum);

// 11

// let n = 4, sum = 0;

// for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
// }

// console.log(sum);

// 12

// let n = 2, sum = 1, x = 1.1;

// for (let i = 1; i <= n; i++) {
//     sum *= x;
//     x += 0.1
// }

// console.log(sum);

// 13

// let n = 2, sum = 0, a = 1.1, x = 1.1;

// for (let i = 1; i <= n; i++) {
//     sum += x;
//     a += 0.1;
//     x = a;
//     x *= (-1) ** (i + 1);
// }

// console.log(sum);

// 14

// let n = 2, sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += 2 * i - 1;
// }

// console.log(sum);


// 15

// let n = 3, a = 4, sum = 1;

// for (let i = 1; i <= n; i++) {
//     sum *= a
// }

// console.log(sum);

// 16

// let n = 3, a = 4, sum = 1;

// for (let i = 1; i <= n; i++) {
//     sum *= a;
//     console.log(sum);
// }

// 17

// let n = 2, a = 4, sum = 1, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= a;
//     sum += res;
// }


// console.log(sum);

// 18

// let n = 2, a = 4, sum = 1, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= -a;
//     sum += res;
// }


// console.log(sum);

// 19

// let n = 5, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= i;
// }


// console.log(res);

// 20

// let n = 2, res = 1, sum = 0, nis;

// for (let i = 1; i <= n; i++) {
//     res *= i;
//     sum += res;
// }


// console.log(sum);

// 21

// let n = 2, res = 1, sum = 0, nis;

// for (let i = 1; i <= n; i++) {
//     res *= i;
//     nis = 1 / res;
//     sum += nis;
// }


// console.log(sum);

// 22

// let sum = 1, x = 3, n = 2, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= x / i;
//     sum += res;
// }

// console.log(sum);

// 23

// let sum = 0, x = 3, n = 3, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= x / i;
//     if (i % 2 != 0) {
//         res *= -1;
//         sum += res;
//     }
// }

// console.log(-sum);


// 24

// let sum = 1, x = 3, n = 3, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= x / i;
//     if (i % 2 == 0) {
//         res *= -1;
//         sum += res;
//     }
// }

// console.log(sum);

// 25

// let sum = 1, x = 3, n = 3, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= x;
//     if (i % 2 == 0) {
//         res *= -1;
//         sum += res / i;
//     }
// }

// console.log(sum);

// 26 ma

// let sum = 0, x = 3, n = 3, res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= x;
//     if (i % 2 !== 0) {
//         res *= -1;
//         sum += res / i;
//     }
// }

// console.log(-sum);

// 27
// let x = 5, n = 2;
// let result = x;
// let term = x;

// for (let i = 1; i <= n; i++) {
//     term *= (2 * i - 1) * x * x / ((2 * i) * (2 * i + 1));
//     result += term;
// }

// 28

// let x = 5, n = 2;
// let result;
// let term;

// for (let i = 1; i <= n; i++) {
//     term *= (2 * i) * x * x / ((2 * i));
//     result += term;
// }


// 29

// let a = 1, b = 10;

// let n = 3;
// let add = (b - a) / n

// for (let i = 1; i < n; i++) {
//     add = i * add;
//     console.log(add + a);
// }

// 31

// let a0 = 2;
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log(a0 + 1 / i);
// }

// 32

// let a0 = 2, ak;
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     ak = (a0 + 1) / i;
//     console.log(ak);
//     ak = (ak + 1) / i
// }

// 33

// let f1 = 1, f2 = 1, fn;
// let n = 12;
// for (let i = 3; i <= n; i++) {
//     fn = f1 + f2;
//     console.log(fn);
//     f1 = f2;
//     f2 = fn;
// }

// 34

// let f1 = 1, f2 = 2, fn;
// let n = 12;
// for (let i = 3; i <= n; i++) {
//     fn = (f1 + 2 * f2) / 3;
//     console.log(fn);
//     f1 = f2;
//     f2 = fn;
// }


// 35


// let f1 = 1, f2 = 2, f3 = 3, fn;
// let n = 12;
// for (let i = 3; i <= n; i++) {
//     fn = f1 + f2 - 2 * f3;
//     console.log(fn);
//     f1 = f2;
//     f2 = f3;
//     f3 = fn;
// }

// 36

// const k = 3;
// const n = 5;

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     let term = i;
//     for (let j = 1; j < k; j++) {
//         term *= i;
//     }
//     sum += term;
// }

// console.log(sum);

// 37

// const n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     let term = i;

//     for (let j = 1; j < i; j++) {
//         term *= i;
//         term %= 1000000007;
//     }

//     sum += term;
//     sum %= 1000000007;
// }

// console.log(sum);

// 38

// const n = 5;
// let result = 0;

// for (let i = 1; i <= n; i++) {
//     let term = i;
//     for (let j = 1; j < i; j++) {
//         term *= i;
//     }
//     result += term;
// }

// console.log(result);

// 39

// let a = 10, b = 15;
// for (let i = a + 1; i < b; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i);
//     }
// }


// 40

// let a = 10, b = 15;
// let sum = 1;
// for (let i = a + 1; i < b; i++) {
//     for (let j = 1; j <= sum; j++) {
//         console.log(i);
//     }
//     sum += 1;
// }



