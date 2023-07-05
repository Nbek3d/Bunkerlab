// function reverseNumber(number) {
//     let reversedNumber = 0;
  
//     while (number !== 0) {
//       const digit = number % 10;
//       reversedNumber = (reversedNumber * 10) + digit;
//       number = (number - digit) / 10;
//     }
  
//     return reversedNumber;
//   }

  
//   console.log(reverseNumber(21));

function palindromNumber(number) {
    let reversedNumber = 0;
    let orginalNumber =number;
  
    while (number !== 0) {
      const digit = number % 10;
      reversedNumber = (reversedNumber * 10) + digit;
      number = (number - digit) / 10;
    }
    if(orginalNumber==reversedNumber){
        return 'palindrom';
    }

    else {
        return 'palindrom emas';
    }
  }

  console.log(palindromNumber(121))
  