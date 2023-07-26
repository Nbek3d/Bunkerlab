//! Curry Function 

// let add=(a,b,c)=>a+b+c;

// let curryAdd=(a)=>(b)=>(c)=>a+b+c;

//? sum(1,4)(2)(3)() )

// let sum = (...arg) => {
//     if (arg.length == 0) return 0;
//     let res = arg.reduce((a, b) => a + b, 0);
//     let sumFn = (...moreArg) => {
//         if (moreArg.length == 0) return res;
//         res += moreArg.reduce((a, b) => a + b, 0);
//         return sumFn
//     }
//     return sumFn

// }

// console.log(sum(1,2)(3)());