// Variables & Data Types(Primitive Types)
const myName = 'Pramote';
let height = 175;
let isMale = false;
let city = null;
let bigNumber = 10n;
console.log(myName, height, isMale, city, bigNumber);

// Data Types(Reference Types) 
// Object
const person = {
    name: 'Pramote',
    height: 175,
    city: 'Bangkok'
};
console.log(person);
console.log(person.city);

person.height = 180;
console.log(person.height);

person.weight = 70;
console.log(person);

// Data Types(Reference Types)
// Array
const numbers = [5, 10, 15, 20];
console.log(numbers);
console.log(numbers[2]);

// Add Array
// Method push
numbers.push(25);
console.log(numbers);
// Method delete
numbers.pop();
console.log(numbers);
// Add in before
// Method unshift
numbers.unshift(1);
console.log(numbers);
// delete in before
// Method shift
numbers.shift();
console.log(numbers);

// Arithmetic Operators
// Addition
let addResult = 10 + 2;
console.log(addResult);
// Subtraction
let subResult = 10 - 2;
console.log(subResult);
// Multiplication
let multiResult = 10 * 2;
console.log(multiResult);
// Division
let divisResult = 10 / 2;
console.log(divisResult);
// Modulus
let modulResult = 10 % 2;
console.log(modulResult);
// Exponentiation
let exponentResult = 10 ** 2;
console.log(exponentResult);
// Mix Operators
let result = 10 + 5 * 2 - 1;
console.log(result);
// Focus
let resultFocus = (10 + 5) * 2 - 1;
console.log(resultFocus);

// Conditions
let password = '';
if (password === '') {
    // Check password required
    console.log('Password is required');
} else if (password.length >= 8 && password.length <= 12) {
    // Check password Length
    console.log('Password is Valid');
} else {
    console.log('Password is Invalid');
}

// Functions
function calculateVat(money, vat) {
    return money * vat / 100;
}
const totalVat = calculateVat(100, 7);
console.log(totalVat);

// Flow Control
for (let counter = 0; counter < 10; counter++) {
    // if(counter % 2 !== 0){
    //     continue;
    // }
    if (counter % 2 === 5) {
        break;
    }
    console.log(counter);
}