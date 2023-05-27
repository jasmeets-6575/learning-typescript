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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value is : " + obj[key];
}

extractAndConvert({ name: "john" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("John1");
textStorage.addItem("John2");
textStorage.addItem("John2.5");
textStorage.addItem("Cena3");
textStorage.addItem("John4");
textStorage.removeItem("john2.5");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
