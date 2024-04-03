// Any JS code is valid TS code. Vice versa is not true.
console.log("Hello world."); // Compiled to the same code

// Types
let myNumber: number = 10; // Compiled to a different code
// myNumber = "asd"; // Error. Invalid code.
myNumber = 100;

// ================ Type Inference ================
// Detect the type of the variable based on the value assigned to it.
let me = "Stefan";
// me = 10;
// me = true;
me = "Bobo";

// ================ String ================
const firstName: string = "Stefan";
// firstName = "Bob"; // Error. firstName is a constant.
let lastName: string = "Trajkovski";
lastName = "Bobski";

// ================ Number ================
let age: number = 35;
let year = 2024;
let largeNumber: number = 123_456_789;

// ================ Boolean ================
const isValid: boolean = true;
const isGreaterThan: boolean = 20 > 10; // true
console.log(isGreaterThan);
console.log(isValid);

let a;
// let varOfTypeAny: string = "Jill";
let varOfTypeAny: number = 20;
// varOfTypeAny = false;
// varOfTypeAny = "Hello";
// varOfTypeAny = {};
// varOfTypeAny = null;

let numberVariable: number = 100;
let arrayVariable: any = [1, 2, 3, 4, 5];
console.log(arrayVariable.length);
// console.log(numberVariable.length); // will throw compile time error
// console.log(varOfTypeAny.length); // will throw runtime error

// ================ Array & Union Types ================
const favoriteFruits: string[] = ["apple", "banana", "orange", "mango"];
const favoriteNumbers: number[] = [1, 2, 3, 4, 5];
const bucketList: Array<string> = ["bread", "milk"];
const randomArray: (string | number)[] = ["hello", 1, "Bob"]; // Union type
const mixedArray: (string | number[])[] = ["Bob", [1, 2, 3]];
let currentYear: string | number = 2024;
currentYear = "2024";

function render(document) {
  console.log(document);
}
// Turn off the error:
// 1. Use any
// 2. Set implicitAny to false in tsconfig.json

// ================ Tuple ================
// Fixed length array where each particular element has a fixed type.
// let user: [number, string] = [1, "Stefan", 5]; // not valid - too many elements
let user: [number, string] = [1, "Stefan"]; // valid
user.push(2);
console.log(user); // returns [1, "Stefan", 2] - valid :(
// console.log(user[2]); // runtime error

// ================ Enum ================
// List of related values (constants)
const enum Size { // adding const before the enum optimizes the compilation process
  s = 1,
  m,
  l,
}
const mySize = Size.m;
console.log("MySize", mySize); // 2. Starts from 0 by default. We can assign different values to each element, or only to the first one and the rest will be incremented by 1.

enum PaymentMethod {
  CASH = "cash",
  CARD = "card",
  PAYPAL = "paypal",
}

const selectPaymentMethod = (
  paymentMethod: PaymentMethod
): string | undefined => {
  if (paymentMethod === PaymentMethod.CASH) {
    return "Processing payment...";
  }

  //   return "We cannot process the payment.";
};

// ================ Functions ================
function calculateTax(amount: number): number {
  return amount * 1.3;
}

const calculateProgressiveTax = (amount: number): number => {
  if (amount > 60000) {
    return amount * 1.5;
  }

  return amount * 1.3;
};

const greetUser = (user: string): void => {
  console.log(`Hello, ${user}`);
};

const finalTax = calculateProgressiveTax(70000);
console.log(finalTax);

// ================ Objects ================
let employee: {
  id: number;
  name: string;
  age?: number;
  hiringDate: (date: Date) => void;
} = {
  // adding ? after the property name makes it optional
  id: 1,
  name: "Stefan",
  hiringDate: (date: Date) => {
    console.log("Hiring date:", date);
  },
};

employee.age = 35;
employee.id = 2;
console.log(employee.hiringDate(new Date()));

// ================ Nullable ================
function greet(name: string | null = null) {
  if (name) {
    console.log(name.toUpperCase());
  }
  console.log("Hello");
}

greet();

// ================ Interfaces ================
// Define the structure of an object
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

let jane: Person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
};

// Inherits all the properties from the Person interface
interface Employee extends Person {
  jobTitle: string;
  salary: number;
  employmentDate?: Date;
}

let john: Employee = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  jobTitle: "Developer",
  salary: 50000,
  employmentDate: new Date("2021-01-01"),
};

interface Pet {
  name: string;
  age?: number;
}

function greetPet(pet: Pet) {
  if (pet.age) {
    return `Hello, ${pet.name}. You are ${pet.age} years old.`;
  }
  return `Hello, ${pet.name}.`;
}

function greetPetVoid(pet: Pet): void {
  if (pet.age) {
    console.log(`Hello, ${pet.name}. You are ${pet.age} years old.`);
  } else console.log(`Hello, ${pet.name}.`);
}
// ELSE is mandatory in the void function.

const greeting = greetPetVoid({ name: "Bobby", age: 5 });

// ================ Type Assertion ================
let bobBobsky = {} as Employee;
