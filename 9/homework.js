//8ta Math

//1 abs

// let absMine=(a)=>{
//     if(a<0) return -a;
//     else return a;
// }

// console.log(absMine(-12));

//2 pow

// let powMine=(a,b)=>{
//     return a**b;
// }

// console.log(powMine(2,4));

//3  sign

// let signMine = (a) => {
//     if (a < 0) return -1;
//     else if (a > 0) return 1;
//     else return 0;
// }

//4 sqrt

// let sqrtMine = (a) => a ** 1 / 2;
// console.log(sqrtMine(4));

//5 cbrt

// let cbrtMine = (a) => a ** 1 / 3;

//6 floor

// let floorMine = (a) => parseInt(a);
// console.log(floorMine(10.9));

//7 ceil

// let ceilMine=(a)=> parseInt(a+1);
// console.log(ceilMine(10.9));

//8 round

// let roundMine = (a) => {
//     if (a >= (parseInt(a) + 0.5)) return parseInt(a + 1);
//     else return parseInt(a);
// }

// console.log(roundMine(1.5));

//9 trunc

// let truncMine = (a) => parseInt(a);

// random a,b

let randomAb = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
}

console.log(randomAb(3, 5));

