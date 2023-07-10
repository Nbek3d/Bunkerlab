//! CRUD Create,Read,Update,Delete

//? Read

const students = [
    { id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
    { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
    { id: 2, fullName: "Najmiddinov Nodirbk", age: 20 },
    { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
    { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
];

//? sort

// let sorted=students.sort((a,b)=>a.id-b.id);
// console.log(sorted);

// let sorted=students.sort((a,b)=>a.age-b.age);
// console.log(sorted);

// let sorted=students.sort((a,b)=>a.fullName.localeCompare(b.fullName));
// console.log(sorted);

//? search

// let searchResults=(str,obj)=>
//     obj.filter(s=>s.fullName.toLowerCase().includes(str.toLowerCase()))


// console.log(searchResults('NoD',students));


//! Delete

// delete  students[1];
// console.log(students);

// let result=students.filter(s=>s.id!==1 );
// console.log(result);

//! Create

// let addUser = (newUser) => [...students, { id: students.length + 1, ...newUser }]
// console.log(addUser({fullName: "Abdurhamoov Abdurahim", age: 1}));

//! Update 

let update=(user,id)=>{
    return students.map((c)=> {
        return c.id===id ? {...c,fullName:user} : c
    })
}

console.log(update('Nodirbek',2));