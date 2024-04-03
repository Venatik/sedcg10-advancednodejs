"use strict";
console.log("Hello world.");
let myNumber = 10;
myNumber = 100;
let me = "Stefan";
me = "Bobo";
const firstName = "Stefan";
let lastName = "Trajkovski";
lastName = "Bobski";
let age = 35;
let year = 2024;
let largeNumber = 123456789;
const isValid = true;
const isGreaterThan = 20 > 10;
console.log(isGreaterThan);
console.log(isValid);
let a;
let varOfTypeAny = 20;
let numberVariable = 100;
let arrayVariable = [1, 2, 3, 4, 5];
console.log(arrayVariable.length);
const favoriteFruits = ["apple", "banana", "orange", "mango"];
const favoriteNumbers = [1, 2, 3, 4, 5];
const bucketList = ["bread", "milk"];
const randomArray = ["hello", 1, "Bob"];
const mixedArray = ["Bob", [1, 2, 3]];
let currentYear = 2024;
currentYear = "2024";
function render(document) {
    console.log(document);
}
let user = [1, "Stefan"];
user.push(2);
console.log(user);
const mySize = 2;
console.log("MySize", mySize);
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CASH"] = "cash";
    PaymentMethod["CARD"] = "card";
    PaymentMethod["PAYPAL"] = "paypal";
})(PaymentMethod || (PaymentMethod = {}));
const selectPaymentMethod = (paymentMethod) => {
    if (paymentMethod === PaymentMethod.CASH) {
        return "Processing payment...";
    }
};
function calculateTax(amount) {
    return amount * 1.3;
}
const calculateProgressiveTax = (amount) => {
    if (amount > 60000) {
        return amount * 1.5;
    }
    return amount * 1.3;
};
const greetUser = (user) => {
    console.log(`Hello, ${user}`);
};
const finalTax = calculateProgressiveTax(70000);
console.log(finalTax);
let employee = {
    id: 1,
    name: "Stefan",
    hiringDate: (date) => {
        console.log("Hiring date:", date);
    },
};
employee.age = 35;
employee.id = 2;
console.log(employee.hiringDate(new Date()));
function greet(name = null) {
    if (name) {
        console.log(name.toUpperCase());
    }
    console.log("Hello");
}
greet();
let jane = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
};
let john = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    jobTitle: "Developer",
    salary: 50000,
    employmentDate: new Date("2021-01-01"),
};
function greetPet(pet) {
    if (pet.age) {
        return `Hello, ${pet.name}. You are ${pet.age} years old.`;
    }
    return `Hello, ${pet.name}.`;
}
function greetPetVoid(pet) {
    if (pet.age) {
        console.log(`Hello, ${pet.name}. You are ${pet.age} years old.`);
    }
    else
        console.log(`Hello, ${pet.name}.`);
}
const greeting = greetPetVoid({ name: "Bobby", age: 5 });
