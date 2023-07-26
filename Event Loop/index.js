//! Event Loop -jsda ish vaqtida asinxron hodisalar va callback larni bloklanmaydigan tarzda boshqarish va amalga oshirish imkonini beruvchi mexanizm

// console.log(1);
// console.log(setTimeout(()=>console.log(2),100));
// console.log(3);

//! Advanced function

//?Apply JS da apply() metodi funksiyani chaqirish va array yoki object qiymatini funksiyaga argument sifatida berish uchun ishlatiladi

// let user1 = {
//     name: 'Nodirbek'
// }
// let user2 = {
//     name: 'Nodirbek2'
// }
// let user3 = {
//     name: 'Nodirbek3'
// }
// let user4 = {
//     name: 'Nodirbek4'
// }

// function greet() {
//     console.log(`${this.name}`);
// }


// function greet(person,punc) {
//     console.log(person+' '+this.name+punc)
// }

// greet.apply(user1,['hello','!']);
// greet.call(user1,'hello','!');

//? Bind
// let res=greet.bind(user1);
// res()
