// for of

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  console.log(val);
}

const greeting = "Hello world";

for (const greet of greeting) {
  console.log(`each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("In", "India");
map.set("USA", "united state of america");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ": ", value);
}

const myObject = {
  game1: "NFS",
  game2: "spiderman",
};

// for (const [key,value] of myObject) {
//     console.log(key, value)
// }

// use for in loop for object

// const obj = {
//   js: "javascript",
//   py: "python",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const key in obj) {
//   console.log(`${key} file name ${obj[key]}`);
// }

// const programming = ["js", "ruby", "python", "java", "cpp"];

// for (const key in programming) {
//   console.log(programming[key]);
// }

// for each loop
// mostly used for array

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (lnaguage) {
  console.log(lnaguage);
});
