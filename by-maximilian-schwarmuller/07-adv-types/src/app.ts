type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "John",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = boolean | number;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("john", "cena");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "John",
  job: { title: "CEO", desc: "My own company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = "";

const stored = userInput ?? "DEFAULT";
console.log(stored);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name : " + emp.name);
//   if ("privileges" in emp) {
//     console.log("privileges " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date " + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("driving");
//   }
// }

// class Truck {
//   drive() {
//     console.log("driving a truck");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo ... " + amount);
//   }
// }

// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 20 });

// const input = document.querySelector("input-message")! as HTMLInputElement;
// input.value = "Hi there";

// interface ErrorContainer {
//   // {email: "not a valid email", username: "must stored with character"}

//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "not a valid email",
//   username: "Must start with a capital letter",
// };
