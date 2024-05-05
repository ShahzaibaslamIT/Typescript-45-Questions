// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log("Equality test with strings:");
console.log(string1 === string2); // False
console.log("Inequality test with strings:");
console.log(string1 !== string2); // True

// Tests using the lower case function
const uppercaseString: string = "HELLO";
const lowercaseString: string = "hello";

console.log("Lowercase test:");
console.log(uppercaseString.toLowerCase() === lowercaseString); // True

// Numerical tests
const num1: number = 5;
const num2: number = 10;

console.log("Equality test with numbers:");
console.log(num1 === num2); // False
console.log("Inequality test with numbers:");
console.log(num1 !== num2); // True
console.log("Greater than test:");
console.log(num2 > num1); // True
console.log("Less than test:");
console.log(num1 < num2); // True
console.log("Greater than or equal to test:");
console.log(num2 >= num1); // True
console.log("Less than or equal to test:");
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
const value1: boolean = true;
const value2: boolean = false;

console.log("And operator test:");
console.log(value1 && value2); // False
console.log("Or operator test:");
console.log(value1 || value2); // True

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];

console.log("Item in array test:");
console.log(array.includes(3)); // True

// Test whether an item is not in an array
console.log("Item not in array test:");
console.log(!array.includes(6)); // True
