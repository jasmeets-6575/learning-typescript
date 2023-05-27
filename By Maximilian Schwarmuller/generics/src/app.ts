// const names: Array<string> = ["John", "Max"];

// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "max" }, { age: 30 }));
const mergedObj = merge({ name: "max" }, { age: 30 });
console.log(mergedObj.age);

// *******************\

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got No value";
  if (element.length === 1) {
    description = "got 1 element";
  } else if (element.length > 1) {
    description = "got " + element.length + " element";
  }
  return [element, description];
}

console.log(countAndDescribe("Hi there"));
