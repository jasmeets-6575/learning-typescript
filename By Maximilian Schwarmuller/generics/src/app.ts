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
