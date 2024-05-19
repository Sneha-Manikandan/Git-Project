console.log("Hi from loops");
const marks = [40, 50, 60, 70, 40];
 
console.log("Normal for loop");
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
 
console.log("for...in");
for (let idx in marks) {
  console.log(marks[idx]);
}
 
console.log("for...of"); // for...in (python)
for (let mark of marks) {
  console.log(mark);
}
 
// for...in
// const avenger = {
//   name: "Tony Stark",
//   house: "🏘️",
//   networth: "💰💰💰",
//   power: "🤖",
//   phrase: "❤️ you 3000",
// };
 
// for (let key in avenger) {
//   console.log(key, avenger[key]); 
// }
 
// console.log(Object.keys(avenger));
// console.log(Object.values(avenger));
 
const avenger = {
  name: "Tony Stark",
  house: "🏘️",
  networth: "💰💰💰",
  power: "🤖",
  phrase: "❤️ you 3000",
};

const {name,network,power}={
  name: "Tony Stark",
  house: "🏘️",
  networth: "💰💰💰",
  power: "🤖",
  phrase: "❤️ you 3000",
}
 
const details = {
  age: 40,
  power: "💿",
};
 
// Merging objects
console.log({ ...avenger, ...details }); // ** - unpacking operator
console.log({ ...details, ...avenger }); // only unique keys


// var x1=5
// var x2="5"
// x1+x2='55'
// x1-x= -2
// x1+ ParceInt(x2)
// x1+ +x2

// == - typecasting and compare
// === - faster
 
