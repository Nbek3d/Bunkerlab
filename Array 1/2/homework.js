// 1
// function countSmallerNumbersToRight(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//       let count = 0;

//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[i]) {
//           count++;
//         }
//       }

//       result.push(count);
//     }

//     return result;
//   }

//   console.log(countSmallerNumbersToRight([5,4,3,2,1]));

//2

// function squareDigits(num){
//     num=num.toString();
//     let result ='';
//     for(let i=0; i<num.length; i++){
//         result += num[i]**2;
//     }
//     result=Number(result);
//     return result;

//   }

//   console.log(squareDigits(748));

//3

// function stringToArray(string){
//     return string.split(/\s+/);
// }

// console.log(stringToArray('sa ds qa'));

//4

// function XO(str) {
//     let countX = 0, countO = 0;
//     str = str.toLowerCase();
//     for(let i = 0; i <str.length; i++) {
//         if(str[i] =='x') countX++;
//         else if(str[i] =='o') countO++;

//     }

//     return countX==countO;
// }

// console.log(XO('saxo'));

//5

// function longest(s1, s2) {
//     let combined=(s1+s2).split('');
//     let combinedArr=[...new Set(combined)];
//     return combinedArr.sort((a,b)=>a.localeCompare(b)).join('');
//   }

//   console.log(longest('sa','qawbd'));

//6

// function getMiddle(s) {
//     let length = s.length;
//     let middleIndex = Math.floor(length / 2);

//     if (length % 2 === 0) {
//       return s[middleIndex - 1] + s[middleIndex];
//     } else {
//       return s[middleIndex];
//     }
//   }

//   console.log(getMiddle('sal'));  

//7

// function solution(number){
//     let result=0;
//     if(number>0) {
//         result=(3*(1+Math.floor((number-1)/3))*Math.floor((number-1)/3)+5*(1+Math.floor((number-1)/5))*Math.floor((number-1)/5)-15*(1+Math.floor((number-1)/15))*Math.floor((number-1)/15))/2;
//     }
//     return result;
//   }

//   console.log(solution(10));

//8

// function descendingOrder(n) {
//     let arrN = n.toString().split('');
//     return Number(arrN.sort((a, b) => b - a).join(''));
// }

// console.log(descendingOrder(124632));

//9

// function digPow(n, p) {
//     let strN = n.toString();
//     let sum = 0;
//     for (let i = 0; i < strN.length; i++) {
//       sum += Math.pow(parseInt(strN[i]), p + i);
//     }
//     return sum %n==0 ? sum/n : -1;
//   }

//   console.log(digPow(81, 1));
// console.log(digPow(46288, 3));

//10

// function friend(friends) {
//     return friends.filter((num)=>num.length==4)
// }

// console.log(friend(['assa','sasa','ssss','s']));

//11

// function persistence(num) {
//     let numStr = num.toString();
//     let mult = 1,sum = 0;

//     while (num >= 10) {
//         for (let char of numStr) {
//             mult *= Number(char);
//         }
//         num = mult;
//         numStr = num.toString();
//         mult = 1;
//         sum++;
//     }

//     return sum;
// }

// console.log(persistence(1262));  

//12

// function createPhoneNumber(numbers){
//   let result=['(',')',' ','-'];
//   result.splice(4,0,numbers[6],numbers[7],numbers[8],numbers[9]);
//   result.splice(3,0,numbers[3],numbers[4],numbers[5]);
//   result.splice(1,0,numbers[0],numbers[1],numbers[2]);
//   return result.join('');
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

//13


// function tribonacci(signature,n){
//     if (n === 0) {
//       return [];
//     } else if (n <= 3) {
//       return signature.slice(0, n);
//     }
  
//     for (let i = 3; i < n; i++) {
//       const nextNumber = signature[i - 1] + signature[i - 2] + signature[i - 3];
//       signature.push(nextNumber);
//     }
  
//     return signature;
//   }

//14

// function findEvenIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
//       const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
  
//       if (leftSum === rightSum) {
//         return i;
//       }
//     }
  
//     return -1;
//   }

//15

// function expandedForm(num) {
//     const numStr = num.toString();
//     let expandedFormStr = '';
  
//     for (let i = 0; i < numStr.length; i++) {
//       const digit = parseInt(numStr[i]);
  
//       if (digit !== 0) {
//         const placeValue = Math.pow(10, numStr.length - i - 1);
//         const term = digit * placeValue;
  
//         if (expandedFormStr.length === 0) {
//           expandedFormStr += term;
//         } else {
//           expandedFormStr += ' + ' + term;
//         }
//       }
//     }
  
//     return expandedFormStr;
//   }

//16

// function findUniq(arr) {
//     const counts = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       counts[num] = (counts[num] || 0) + 1;
//     }
  
//     for (const num in counts) {
//       if (counts[num] === 1) {
//         return parseFloat(num); // Convert the unique number from string to number
//       }
//     }
//   }

//17

// function incrementString(str) {
//     const matches = str.match(/(\d+)$/);
//    if (matches) {
//      const numberStr = matches[1];
//      const numberLength = numberStr.length;
//      const number = parseInt(numberStr); 
//      const incrementedNumber = (number + 1).toString().padStart(numberLength, '0');
 
//       return str.replace(/(\d+)$/, incrementedNumber);
//    } else {
//         return str + '1';
//    }
//  }
  

//18

// function findPair(nums, targetSum) {
//     const numSet = new Set(); 
    
//     for (let i = 0; i < nums.length; i++) {
//       const complement = targetSum - nums[i]; 
//       if (numSet.has(complement)) {
//         return [complement, nums[i]];
//       }
  
//       numSet.add(nums[i]); 
//     }
  
//     return [];
//   }

//19



