let users = [
    { id: 1, year: 1998, engine: 1, name: 'Tico' },
    { id: 2, year: 2005, engine: 1.2, name: 'Matiz' },
    { id: 3, year: 2010, engine: 1.6, name: 'Gentra' },
    { id: 4, year: 2010, engine: 1.5, name: 'Cobalt' },
    { id: 5, year: 2012, engine: 2 , name: 'Malibu'},
    { id: 6, year: 2000, engine: 1.2, name:'Damas'},
    { id: 7, year: 2018, engine:2.4,name:'Trackers'},
];

  users.forEach(user => {
    if (user.year < 2000) {
      user.status = 'eski';
    }
  });

  users.forEach(user => {
    if (user.year < 2010 || user.year >2000) {
      user.status = "o'rta";
    }
  });

  users.forEach(user => {
    if (user.year < 2022 || user.year >2010) {
      user.status = "yangi";
    }
  });
  
  console.log(users);

// console.log(users.filter(e=>e.year<2000));
// console.log(users.filter(e=>e.year>2010));
// console.log(users.sort((a,b)=>a.engine-b.engine));
// console.log(users.sort((a,b)=>a.year-b.year));
// console.log(users.sort((a,b)=>a.name.localeCompare(b.name)));
