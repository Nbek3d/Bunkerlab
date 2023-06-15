//Masalalar 
//1

// let a=12;
// if(a>0){
//     a++;
// }
// console.log(a);

//


// let a=-12;
// if(a>0){
//     a++;
// }
// else a-=2;
// console.log(a);

//3

// let a = -12;
// if (a > 0) a++;
// else if (a < 0) a = -2;
// else a = 10;
// console.log(a);

//4 masala

// let a=12,b=13,c=-1;
// let n=0;
// if(a>0) n++;
// if(b>0) n++;
// if(c>0) n++;
// console.log(n);

//5

// let a = 12, b = 13, c = -1;
// let mus = 0, man = 0;
// if (a > 0) mus++;
// else if (a < 0) man++;
// if (b > 0) mus++;
// else if (b < 0) man++;
// if (c > 0) mus++;
// else if (c < 0) man++;
// console.log('Musbatlar-' + mus);
// console.log('Musbatlar-' + man);

//6

// let a = 12, b = 3;
// if (a > b) console.log(a);
// else console.log(b);

//7

// let son1=12,son2=121;

// if(son1>son2) console.log('1-son 2-sidan katta');
// else if(son1<son2) console.log('2-son 1-sidan katta');
// else console.log('teng');

//8

// let a=12;b=21;
// if(a>b) console.log(a,b);
// else console.log(b,a);

//9

// let a=23,b=12;

// if(a>b){
//     b=a+b;
//     a=b-a;
//     b=b-a;
// }

// console.log(a,b);

//10

// let a=12,b=12;

// if(a==b) {
//     a=b=0;
// }

// else a=a+b;b=a;
// console.log(a,b);

//11

// let a=12,b=12;

// if(a>b) b=a;
// else if(a<b) a=b;
// else a=b=0;
// console.log(a,b);

//12

// let a=12,b=122,c=32;

// if(a<b){
//     if(a<c) console.log(a);
//     else console.log(c);
// }

// else{
//     if(b<c) console.log(b);
//     else console.log(c);
// }

//13

// let a=12,b=122,c=32;

// if(a<b){
//     if(b<c) console.log(b);
//     else {
//         if(a>c) console.log(a);
//         else console.log(c);
//     }
// }

// else{
//     if(a<c) console.log(a);
//     else{
//         if(c>b) console.log(b);
//         else console.log(c);
//     }
// }

//14


// let a=12,b=122,c=32;

// if (a>b){
//     if(b>c) console.log(a,c);
//     else if(a<c) console.log(c,b);
//     else console.log(a,b );
// }

// else {
//     if(a>c) console.log(b,c);
//     else if(b<c) console.log(c,a);
//     else console.log(b,a);
// }

//15


// let a=12,b=122,c=32;
// let min;

// if(a<b){
//     if(a<c) min=a;
//     else min=c;
// }

// else{
//     if(b<c) min=b;
//     else min=c;
// }

// console.log(a+b+c-min,min);

//16 

// let a=12,b=122,c=32;
// if(a<b&&b<c){
//     a*=2;b*=2;c*=2;
// }

// else {
//     a*=-1;b*=-1;c*=-1;
// }
// console.log(a,b,c);

//17

// let a=12,b=2,c=1;
// if((a<b&&b<c)||(a>b&&c<b)){
//     a*=2;b*=2;c*=2;
// }

// else {
//     a*=-1;b*=-1;c*=-1;
// }
// console.log(a,b,c);

//18

// let a=12,b=12,c=1;

// if(a==b) console.log(c);
// else if(a==c) console.log(b);
// else if(c==b) console.log(a);
// else console.log('ikkita teng qiymat yoq');

//19

// let a=12,b=12,c=12,d=1;

// if(a==b&&b==c) console.log(d);
// else if(a==b&&b==d) console.log(c);
// else if(a==c&&c==d) console.log(b);
// else if(b==c&&c==d) console.log(a);
// else console.log('uchta teng qiymat yoq');

//20

// let a=12,b=32,c=32;
// let b1,c1;

// b1=a-b;c1=a-c;

// if(b1<0) b1*=-1;
// if(c1<0) c1*=-1;

// if(c1>b1)    console.log("B A ga yaqin.Ular orasidagi masofa-"+b1)

// else  console.log("C A ga yaqin.Ular orasidagi masofa-"+c1)

//switch case

// if (browser === 'Edge') {
//     alert("You've got the Edge!");
//   } else if (
//     browser === 'Chrome' ||
//     browser === 'Firefox' ||
//     browser === 'Safari' ||
//     browser === 'Opera'
//   ) {
//     alert('Okay we support these browsers too');
//   } else {
//     alert('We hope that this page looks ok!');
//   }
  