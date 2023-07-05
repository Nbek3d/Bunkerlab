//1

// let checkToString=(str)=>{
//     if(typeof str=="string") return true;
//     else return false;
// }

// console.log(checkToString('sa'));


//2

// let checkToBlank=(str)=>{
//     if(str.length==0) return true;
//     else return false;
// }
// console.log(checkToBlank('as'));

//3

// let stringToArray=(str)=>{
//     return str.split(' ');
// }

// console.log(stringToArray('sa sa qa'));

//4

// let truncateString=(str,n)=>{
//     return str.substr(0,n);
// }

// console.log(truncateString('sa sa',1));

//5

// let abbrevName = (str) => {
//     let splitStr = str.split(' ');
//     return splitStr[0]+' '+splitStr[1].charAt(0)+'.';
// }

// console.log(abbrevName('Salom Shox'));


//6

// let protectEmail=(str) => {
//     let splitStr = str.split('_');
//     return splitStr[0]+'...@'+str.split('@')[1]
// }

// console.log(protectEmail('as_aq@gmai'));

//7

// let stringParameterize=(str)=>{
//     let splitStr =str.toLowerCase().split(' ');
//     let result=splitStr[0];
//     for(let i=1; i<splitStr.length; i++){
//         result+='-'+splitStr[i]
//     }
//     return result;

// }

// console.log(stringParameterize('drtdt ftf Sa'));

//8

// let capitalize=(str)=>{
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }

// console.log(capitalize('salom html'));

//9

// let capitalizeWords=(str)=>{
//     let strSplit = str.split(' ');
//     let result;
//     for(let i=0; i<strSplit.length; i++){
//         result+=strSplit[i].charAt(0).toUpperCase()+strSplit[i].slice(1)+' ';
//     }
// }

//10

// let swapcase=(str)=>{
//     for(let i=0; i<str.length; i++){
//         if(str[i]==str[i].toUpperCase()) str[i]=str[i].toLowerCase();
//         else str[i]=str[i].toUpperCase();
//     }
//     return str;
// }

// console.log(swapcase('aAbB'));

//11

// let camelize = (str) => {
//     let splitStr = str.split(' ');
//     let result = '';
//     splitStr = splitStr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//     result = splitStr.join('');
//     return result;
// }

// console.log(camelize('as sa'));


//12

// let uncamelize=(str,space=' ')=>{
//     let result='';
//     for(let i=0; i<str.length; i++){
//         if(str[i]==str[i].toUpperCase()) result+=str.slice(0,i)+space+str.slice(i,str.length);

//     }
//     return result;
// }

// console.log(uncamelize('asSa', '-'));

//13

// let repeat=(str,rep=1)=>{
//     let result='';
//     for(let i=0;i<=rep;i++){
//         result+=str;
//     }
//     return result;
// }

// console.log(repeat('sa',4));

//14

// let insert=(str,insertStr='',position=1)=>{
//     return str.slice(0,position)+' '+insertStr+str.slice(position);
// }

// console.log(insert('salom','qa',7));

//15

// let humanizeFormat = (str) => {
//     str = str.toString();
//     switch (str[str.length - 1]) {
//         case 1:
//             return str + 'st';
//         case 2:
//             return str + 'nd';
//         case 3:
//             return str + 'rd';
//         default:
//             return str + 'th';
//     }
// }

// console.log(humanizeFormat(122));

//16

// let textTruncate = (str, truncateNum, char = '...') => {
//     if (!(truncateNum)) truncateNum = str.length;
//     str=str.slice(0, truncateNum-char.length);
//     return str.padEnd(truncateNum, char)
// }

// console.log(textTruncate('salom  dunyo', 5));

//17

