// let users = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico' },
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz' },
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra' },
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt' },
//     { id: 5, year: 2012, engine: 2 , name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name:'Damas'},
//     { id: 7, year: 2018, engine:2.4,name:'Trackers'},
// ];

//   users.forEach(user => {
//     if (user.year < 2000) {
//       user.status = 'eski';
//     }
//   });

//   users.forEach(user => {
//     if (user.year < 2010 || user.year >2000) {
//       user.status = "o'rta";
//     }
//   });

//   users.forEach(user => {
//     if (user.year < 2022 || user.year >2010) {
//       user.status = "yangi";
//     }
//   });
  
//   console.log(users);

// console.log(users.filter(e=>e.year<2000));
// console.log(users.filter(e=>e.year>2010));
// console.log(users.sort((a,b)=>a.engine-b.engine));
// console.log(users.sort((a,b)=>a.year-b.year));
// console.log(users.sort((a,b)=>a.name.localeCompare(b.name)));

// function replaceDigits(input) {
//     let result = '';
//     for (let i = 0; i < input.length; i++) {
//       const digit = input[i];
//       if (digit < '5') {
//         result += '0';
//       } else {
//         result += '1';
//       }
//     }
//     return result;
//   }

// function dbl_linear(n) {
//     const sequence = [1];
//     let x = 0;
//     let y = 0;
  
//     while (sequence.length <= n) {
//       const nextX = 2 * sequence[x] + 1;
//       const nextY = 3 * sequence[y] + 1;
  
//       if (nextX <= nextY) {
//         sequence.push(nextX);
//         x++;
//         if (nextX === nextY) {
//           y++;
//         }
//       } else {
//         sequence.push(nextY);
//         y++;
//       }
//     }
  
//     return sequence[n];
//   }
  
// const RomanNumerals = {
//     romanValues: {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1
//     },
  
//     toRoman: function (integer) {
//       let result = '';
//       let remaining = integer;
  
//       for (const numeral in this.romanValues) {
//         const value = this.romanValues[numeral];
//         while (remaining >= value) {
//           result += numeral;
//           remaining -= value;
//         }
//       }
  
//       return result;
//     }
//   };
  
// function determineOddOrEven(arr) {
//     if (arr.length === 0) {
//       arr = [0];
//     }
  
//     const sum = arr.reduce((acc, curr) => acc + curr);
//     return sum % 2 === 0 ? "even" : "odd";
//   }
  
// function recoverSecret(triplets) {
//     const graph = new Map();
  
//     for (const triplet of triplets) {
//       const [first, second, third] = triplet;
  
//       if (!graph.has(first)) graph.set(first, new Set());
//       if (!graph.has(second)) graph.set(second, new Set());
//       if (!graph.has(third)) graph.set(third, new Set());
  
//       graph.get(first).add(second);
//       graph.get(second).add(third);
//     }
  
//     const result = [];
//     while (graph.size > 0) {
//       let found = false;
  
//       for (const [letter, edges] of graph) {
//         if (edges.size === 0) {
//           result.unshift(letter);
  
//           graph.delete(letter);
//           for (const edgesSet of graph.values()) {
//             edgesSet.delete(letter);
//           }
  
//           found = true;
//           break;
//         }
//       }
  
//       if (!found) {
//         throw new Error("Invalid triplets - cyclic dependency detected");
//       }
//     }
  
//     return result.join('');
//   }
  
// function primeFactors(n) {
//     let result = '';
//     let currentFactor = 2;
//     let currentCount = 0;
  
//     while (n > 1) {
//       if (n % currentFactor === 0) {
//         currentCount++;
//         n /= currentFactor;
//       } else {
//         if (currentCount > 0) {
//           result += `(${currentFactor}${currentCount > 1 ? `**${currentCount}` : ''})`;
//         }
//         currentFactor++;
//         currentCount = 0;
//       }
//     }
  
//     if (currentCount > 0) {
//       result += `(${currentFactor}${currentCount > 1 ? `**${currentCount}` : ''})`;
//     }
  
//     return result;
//   }
  