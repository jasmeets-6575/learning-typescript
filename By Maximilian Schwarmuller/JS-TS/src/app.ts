// const userName = "John";

// let age = 30;

// age = 29;
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

// const add = (a: number, b: number = 3) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  userName: "john",
  age: 30,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curr, acc) => {
    return curr + acc;
  }, 0);
};

const addedNumbers = add(5, 10, 3, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remaining] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { userName, age } = person;
console.log(userName, age);