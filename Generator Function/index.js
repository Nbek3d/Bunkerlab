//! Generator Function

// function* numberGenerator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let num=numberGenerator();

// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().done);

// function* dinamicGenerator(){
//     let i=0;
//     while(true){
//         yield i++;
//     }
// }

// let nums=dinamicGenerator();
// console.log(nums.next().value);
// console.log(nums.next().value);
// console.log(nums.next().value);
// console.log(nums.next().value);
// console.log(nums.next().value);
// console.log(nums.next().value);
// console.log(nums.next().value);
// console.log(nums.next().value);

// let data = [
//     {
//         id: 1,
//         name: 'Nodir1'
//     },
//     {
//         id: 2,
//         name: 'Nodir2'
//     },
//     {
//         id: 3,
//         name: 'Nodir3'
//     },
//     {
//         id: 4,
//         name: 'Nodir4'
//     },
// ];

// let length = data.length;

// function* numberGenerator() {
//     while (1) {
//         yield ++length;
//     }
// }

// let num = numberGenerator();

// let addUser = (user) => {
//     data = [...data, { id: num.next().value,...user }]
// }

// let deleteUser = (id) => {
//     data = data.filter((user) => user.id !== id)
// }

// addUser({ name: 'Nodir5' })
// console.log(data);
// deleteUser(3)
// console.log(data);
// addUser({ name: 'Nodir5' })
// console.log(data);
//'