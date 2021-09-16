let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let elzero = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (ele, comm) {
    return `${ele}${comm}`;
  });

console.log(elzero);
// Elzero

//=============================
//=============================

let myString = "EElllzzzzzzzeroo";
let nodouble = myString
  .split("")
  .filter((el, i, arr) => arr[i] !== arr[i + 1])
  .join(""); // Elzero
console.log(nodouble);

//======================================
//======================================

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myreduce = myArray.reduce(function (ele, elee, eleee, arr) {
  return `${arr[0]}${arr[1]}${arr[2]}${arr[3][0]}${arr[3][1]}${arr[4]}`;
});

console.log(myreduce);
// Elzero

//==========================================
//==========================================

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numstring = numsAndStrings
  .filter((ele) => typeof ele == "number")
  .map((ele) => -ele);
console.log(numstring);

// [-1, -10, 10, 20, -5, -3]

//==========================================
//==========================================

let nums = [2, 12, 11, 5, 10, 1, 99];

let numreduce = nums.reduce(function (ele, current) {
  return current % 2 == 0 ? ele * current : ele + current;
}, 1);

console.log(numreduce);
// 500
