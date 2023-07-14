// !Scope -ish vaqti davomida kodning ma'lum bir qismidagi o'zgaruvchilar,funksiyalar va ob'ektlarning ko'rinishi va kodning o'zgaruvchiga yoki funksiyaga kirish mumkin bo'lgan qismi


//?1 Global Scope (var,let,const)

// let name='Salom';
// for (let i=0; i<2;i++){
//     console.log(name);
// }

//? 2 functional Scope

// let salom=()=>{
//     let hi='asl';
// }

// console.log(hi);

//?3 block scope (let const)

// {
//     var hi='sal';
//     let h='as';
// }
// console.log(hi);
// console.log(h);


//! Closure- tashqi funksiya ishini bajargandan keyin ham funksiyaga tashqi doiradan o'zgaruvchilarni olish imkonini beradi

let a=10;
for(let i=0; i<a; i++){
    console.log(a);
}