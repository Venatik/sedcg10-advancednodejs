// ============== Unknown Type ==============
let variableOfTypeUnknownStr: unknown =
  "This variable has type 'unknown' and requires type checks.";
let variableOfTypeUnknownNum: unknown = 10;

// The 'unknown' type is a type-safe counterpart of 'any'. We need to type check before executing the code.
if (typeof variableOfTypeUnknownStr === "string") {
  const lengthOfUnknown = variableOfTypeUnknownStr.length;
  console.log(lengthOfUnknown);
}

if (typeof variableOfTypeUnknownNum === "number") {
  const exponentialOfNum = Math.pow(variableOfTypeUnknownNum, 3);
  console.log(exponentialOfNum);
}

// ============== Never Type ==============
// Type of values that never occur, function that never returns a value
function infiniteLoop(): never {
  while (true) {
    console.log("Infinite Loop");
  }
}

// ============== Type ==============
// Types in TS are more flexible and can define primitive, intersection, union, tuple or different types of data, while interfaces are used to describe the shape of an object

type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

// Union of custom types
type Shape = Circle | Rectangle;

const calculateArea = (shape: Shape): number => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
  return 0;
};

// type Person = {
//   name: string;
//   age: number;
// };

// let joe: Person = {
//   name: "Joe",
//   age: 30,
// };

// ============== Intersection ==============
interface Swimmer {
  swim(): void;
}

interface Flyer {
  fly(): void;
}

const duck: Swimmer & Flyer = {
  swim() {
    console.log("The duck is swimming");
  },
  fly() {
    console.log("The duck is flying");
  },
};

function move(animal: Swimmer & Flyer) {
  animal.swim();
  animal.fly();
}

move(duck);

// ============== Classes ==============
// Classes in TS are similar to classes in other OOP languages, but with some additional features like access modifiers, abstract classes, etc.
class Car {
  brand: string;
  color: string;
  year: number;

  constructor(brand: string, color: string, yearOfProd: number) {
    this.brand = brand;
    this.color = color;
    this.year = yearOfProd;
  }

  drive() {
    console.log("The car is driving.");
  }
}

const myCar = new Car("Yugo", "red", 1987);
myCar.drive();

// ============== Inheritance ==============
class Person {
  private _id: number;
  firstName: string;
  lastName: string;
  protected _age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
  }

  // Returns the value
  get age(): number {
    return this._age;
  }

  // Sets the value
  set age(value: number) {
    if (value >= 0) {
      this._age = value;
    } else {
      throw new Error("Age must be a positive number.");
    }
  }

  displayInfo() {
    console.log(
      `ID: ${this._id}, Name: ${this.firstName} ${this.lastName}, Age: ${this._age}`
    );
  }
}

const me = new Person(1, "Stefan", "Trajkovski", 34);
me.displayInfo();
// me.firstName = "NewName" // Valid
// me.id = 2 // Invalid because id is a private property
// Access Modifiers: public, private, protected

class Employee extends Person {
  // Class child properties
  private _employeeId: number;
  department: string;

  // Call the Employee class constructor
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    employeeId: number,
    department: string
  ) {
    // call the constructor of the parent class
    super(id, firstName, lastName, age);
    this._employeeId = employeeId;
    this.department = department;
  }

  displayInfo(): void {
    console.log(
      `Employee ID: ${this._employeeId}, Department: ${this.department}`
    );
  }
}

const bob = new Employee(2, "Bob", "Bobsky", 30, 1001, "HR");
bob.displayInfo();
// bob._employeeId // Invalid because employeeId is a private property

// ============== Getters and Setters ==============
me.age = 35;
console.log(me.age);

// ============== Abstract Classes ==============
// Abstract classes are classes that cannot be instantiated and are designed to be inherited by other classes. We cannot create an object of an abstract class.

abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void; // abstract method don't have implementations, only declarations

  move(distance: number) {
    console.log(`${this.name} moved ${distance}km.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} is barking.`);
  }
}

class Bird extends Animal {
  makeSound(): void {
    console.log(`${this.name} is chirping.`);
  }
}

// const animal = new Animal("Animal"); // Error: Cannot create an instance of an abstract class
const dog = new Dog("Doge");
dog.makeSound();
dog.move(5);

// ============== Generics ==============
// Generics allow us to create reusable components that can work with a variety of types rather than a single one.
function echo<T>(arg: T): T {
  return arg;
}

console.log(echo("Hello world!"));
console.log(echo(10));
console.log(echo(true));

function sumNumbersOrStrings<T>(arg1: T, arg2: T): T {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return (arg1 + arg2) as T;
  }

  if (typeof arg1 === "string" && typeof arg2 === "string") {
    return (arg1 + " " + arg2) as T;
  }

  throw new Error("Parameters must be of the same type.");
}

const result1 = sumNumbersOrStrings(10, 20);
console.log(result1);
const result2 = sumNumbersOrStrings("Hello", "World");
console.log(result2);

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>("Hello", 42));
console.log(createPair<number, string>(1, "Bobo"));
console.log(createPair<boolean, boolean>(true, false));
