// const user1 = {
//   firstName: "Abdurahim",
//   surname: "Abdurahmonov",
//   // getFullname() {
//   // 	console.log(`${this.firstName}, ${this.surname}`);
//   // },
// };
// const user2 = {
//   firstName: "Zuhriddin",
//   surname: "Qulmatov",
//   // getFullname() {
//   //   console.log(`${this.firstName}, ${this.surname}`);
//   // },
// };

// const user3 = {
//   firstName: "Ashrafxon",
//   surname: "Yaxyoyev",
//   // getFullname() {
//   //   console.log(`${this.firstName}, ${this.surname}`);
//   // },
// };

// function getData(customP1, customP2) {
//   console.log(`${customP1} ${customP2} ${this.firstName}, ${this.surname}`);
// }
//! apply(object, [customP1, customP2, ...])
// getData.apply(user1, ["Webbrain", "talabasi"]);
// getData.apply(user2);
// getData.apply(user3);
//! call(object, customP1, customP2, ...)
// getData.call(user1, "Webbrain", "talabasi");
//! bind(object, customP1, customP2, ...)()
// let getAbdurahimsData = getData.bind(user1, "Webbrain", "talabasi");
// getAbdurahimsData()
