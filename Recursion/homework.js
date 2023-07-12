// let company={
//     sales:[
//         {name:'Peter',salary:1000},
//         {name:'Alex',salary:1600}
//     ],
//     development:{
//         sites:[
//             {name:'John',salary:2000},
//             {name:'Alex',salary:1800},
//         ],
//         internals:[{name:'Alex',salary:1500}]
//     }
// }

// function calculateSalarySum(obj) {
//     let sum = 0;
  
//     for (const key in obj) {
//       if (Array.isArray(obj[key])) {
//         for (let i = 0; i < obj[key].length; i++) {
//           if (typeof obj[key][i] === 'object') {
//             sum += calculateSalarySum(obj[key][i]);
//           }
//         }
//       } else if (typeof obj[key] === 'object') {
//         sum += calculateSalarySum(obj[key]);
//       } else if (key === 'salary' && typeof obj[key] === 'number') {
//         sum += obj[key];
//       }
//     }
  
//     return sum;
//   }
  
//   const totalSalary = calculateSalarySum(company);
//   console.log(totalSalary);
  

const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  console.log(fibonacci(5));