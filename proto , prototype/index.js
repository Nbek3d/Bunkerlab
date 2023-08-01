// function NumberGenerator(n, t = '-tup son', m = '-murakkab son') {
//     this.n = n;
//     this.t = t;
//     this.m = m;
//   }
  
//   NumberGenerator.prototype.generateSequence = function () {
//     for (let i = 1; i <= this.n; i++) {
//       if (i == 1) {
//         console.log('1-na tub na murakkab');
//       } else if (i < 6 && i > 1) {
//         if (i == 2 || i == 3 || i == 5) {
//           console.log(i + this.t);
//         } else {
//           console.log(i + this.m);
//         }
//       } else {
//         if (i % 6 == 1 || i % 6 == 5) {
//           let ildiz = Math.floor(Math.sqrt(i)),
//             b;
//           for (let j = 2; j <= ildiz; j++) {
//             if (i % j == 0) {
//               b = true;
//               break;
//             } else {
//               b = false;
//             }
//           }
//           b ? console.log(i + this.m) : console.log(i + this.t);
//         } else console.log(i + this.m);
//       }
//     }
//   };
  
  
//   let n = 100;
//   let generator = new NumberGenerator(n);
//   generator.generateSequence();
 

