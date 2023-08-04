//? 1 => html tag ga attribute bilan
// const forButton = () => console.log(1);
//? 2 => JS bilan
// const button = document.querySelector("#btn");
// button.onclick = (e) => {
//   console.log(e);
// };
// button.ondblclick = forButton;
//? 3 => addEventListener
// button.addEventListener("click", () => {
// 	console.log(1);
// })
// button.addEventListener("click", forButton)
// button.addEventListener("contextmenu", forButton)

// onclick => 1 marta bosilganda (chap knopka)
// ondblclick => 2 marta bosilganda (chap knopka)
// oncontextmenu => 1 marta bosilganda (chap knopka)
// onmousemove => sichqoncha joyidan siljiganda ishlaydi
// onmouseout => sichqoncha object dan tashqariga chiqganda ishlaydi
// onmouseover => sichqoncha object dan tashqariga chiqganda ishlaydi
// button.addEventListener("mouseover", (event) => {
//   console.log(event);
// });

// CRUD
// let students = [
//   { id: 2, fullName: "Najmiddinov Nodirbek", age: 20 },
//   { id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
//   { id: 6, fullName: "Eshmat", age: 23 },
// ];

// const body = document.querySelector("body");

// const container = document.createElement("div");
// const display = (data) => {
//   data.forEach((v) => {
//     const item = document.createElement("div");
//     item.innerHTML = `${v.id}. ${v.fullName} - ${v.age} yosh`;
//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.onclick = () => deleteStudent(v.id);
//     item.append(deleteButton);
//     container.append(item);
//   });
//   body.prepend(container);
// };
// display(students);

// function deleteStudent(id) {
//   let result = students.filter((s) => s.id !== id);
//   students = result;
//   container.innerHTML = "";
//   display(students);
// }

// const sortById = document.querySelector("#id");
// sortById.onclick = () => sortStudentsById(students);
// function sortStudentsById(data) {
//   let result = data.sort((a, b) => a.id - b.id);
//   students = result;
//   container.innerHTML = "";
//   display(students);
// }

// const sortByAge = document.querySelector("#age");
// sortByAge.onclick = () => sortStudentsByAge(students);
// function sortStudentsByAge(data) {
//   let result = data.sort((a, b) => a.age - b.age);
//   students = result;
//   container.innerHTML = "";
//   display(students);
// }

// const sortByName = document.querySelector("#name");
// sortByName.onclick = () => sortStudentsByName(students);
// function sortStudentsByName(data) {
//   let result = data.sort((a, b) => a.fullName.localeCompare(b.fullName));
//   students = result;
//   container.innerHTML = "";
//   display(students);
// }

// const one = document.querySelector("#one");
// const five = document.querySelector("#five");
// const ten = document.querySelector("#ten");

const buttons = document.querySelectorAll("button");

const getValue = (tag) => {
  console.log(+tag.target.innerText);
};

buttons.forEach((v) => {
  v.onclick = (e) => getValue(e);
});

// buttons[0].onclick = (e) => {
//   getValue(e);
// };

// buttons[1].onclick = (e) => {
//   getValue(e);
// };

// buttons[2].onclick = (e) => {
//   getValue(e);
// };