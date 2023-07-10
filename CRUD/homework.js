//2

// let str = 'webbr@in Ac@demy';
// let res = '';
// for (char of str) {
//     if (char === '@') res += 'a';
//     else res+=char;
// }
// console.log(res);

//1

// const sumStrASCII = (str) => {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         sum += str.charCodeAt(i);
//     }
//     return sum;
// };
// const ASCII_Case_Diferennce = 'a'.charCodeAt(0)-'A'.charCodeAt(0);
// let UpperChars, 
//     LowerChars;
// const str = 'Assa';
// UpperChars = (sumStrASCII(str.toLowerCase()) - sumStrASCII(str)) / ASCII_Case_Diferennce;
// LowerChars = (sumStrASCII(str) - sumStrASCII(str.toUpperCase())) / ASCII_Case_Diferennce;

// console.log(UpperChars);
// console.log(LowerChars);

//2

// let obj={
//     title:'webbrain',
//     age:2,
//     child:{
//         age:4,
//         title: 'webbrai',
//         child:{
//             age:3,
//         }
//     }

// };

// let res=0;

// while (obj) {
//     res+=obj.age;
//     obj=obj.child;   
// }

// console.log(res);

// let obj = {
//     id:1,
//     name:'webbrain',
//     offline:true,
//     online:true,
//     indivudal:false,
//   };

//   let booleanPairs = [];

//   for (let key in obj) {
//     if (typeof obj[key] === 'boolean') {
//       booleanPairs.push([key, obj[key]]);
//     }
//   }

//   console.log(booleanPairs);

//9

// let str = 'webbraaiiin';
// let res = '';
// let count = 1;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     count++;
//   } else {
//     res += str[i] + (count > 1 ? count : '');
//     count = 1;
//   }
// }

// console.log(res);

// let array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 4, 7];
// let uniqueArray = [];

// for (let i = 0; i < array.length; i++) {
//   if (uniqueArray.indexOf(array[i]) === -1) {
//     uniqueArray.push(array[i]);
//   }
// }

// console.log(uniqueArray);

//moment

// const date = new Date();

// const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
//     year: 'numeric'
// };

// const locale = 'en';

// const formattedLT = date.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', hour12: true });
// const formattedLTS = date.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
// const formattedL = date.toLocaleDateString(locale);
// const formattedl = date.toLocaleDateString(locale, { month: 'numeric', day: 'numeric' });
// const formattedLL = date.toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
// const formattedll = date.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' });
// const formattedLLL = date.toLocaleString(locale, options);
// const formattedlll = date.toLocaleString(locale, { ...options, month: 'short' });
// const formattedLLLL = date.toLocaleString(locale, { ...options, weekday: 'long' });
// const formattedllll = date.toLocaleString(locale, { ...options, weekday: 'short' });

// console.log(formattedLT);
// console.log(formattedLTS);
// console.log(formattedL);
// console.log(formattedl);
// console.log(formattedLL);
// console.log(formattedll);
// console.log(formattedLLL);
// console.log(formattedlll);
// console.log(formattedLLLL);
// console.log(formattedllll);


function countLetters(text) {
    const letterCounts = {};
  
    for (let i = 0; i < text.length; i++) {
      const letter = text[i].toLowerCase();
  
      if (letter.match(/[a-z]/i)) {
        if (letterCounts[letter]) {
          letterCounts[letter]++;
        } else {
          letterCounts[letter] = 1;
        }
      }
    }
  
    return letterCounts;
  }
  
  const text = "Hello, world!";
  const result = countLetters(text);
  
  console.log(result);
  

