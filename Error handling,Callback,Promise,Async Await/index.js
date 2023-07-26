//! Error Handling

// console.log(num);

// try{ ... } -asosiy kod yoziladi;
// catch(){...} -asosiy koddan erro kelganda ishlaydi

//catch(err)- err bu parametr try da yuz bergan errorni ifodalaydi
// err ni biz name ,massage va stock properties qiymatlari bor 

// try {
//     console.log(num);
// }
// catch (e) { 
//     // console.log(e.name);
//     // console.log(e.message);
//     console.log(e.stack);
//  }

// ? new Error orqali qo'lda error yasahimiz  ham mumkin

// try{
//     console.log(new Error('smth went wrong'));
// }

// catch{
// console.log('smth');
// }

// try{
//    throw new Error('smth went wrong');
// }

// catch{
// console.log('smth');
// }

//! Calback hell

// let data={
//     Nodir:{
//         name:'Nodirbek',
//         pasword:123
//     }
// }

// console.log('started');

// function login(log,pas,cal){
//     setTimeout(() => {
//         if(data.Nodir.name === log && data.Nodir.pasword === pas){
//             cal('kirishga ruxsat');
//             console.log('finished');
//         }
//         else {cal('kirishga ruxsat yoq');
//         console.log('finished');
//     }
//     }, 0);
// }

// login('Nod',123,(res)=>{
//     console.log(res);
// })




