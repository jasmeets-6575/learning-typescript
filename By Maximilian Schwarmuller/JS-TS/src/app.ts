const userName = "John";

let age = 30;

age = 29;
// var result;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if(age > 20 ){
//     var isOld = true
// }
// console.log(isOld);

// console.log(result);

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(2, 5));
