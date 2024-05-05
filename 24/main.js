// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Equality test with strings:");
console.log(string1 === string2); // False
console.log("Inequality test with strings:");
console.log(string1 !== string2); // True
// Tests using the lower case function
var uppercaseString = "HELLO";
var lowercaseString = "hello";
console.log("Lowercase test:");
console.log(uppercaseString.toLowerCase() === lowercaseString); // True
// Numerical tests
var num1 = 5;
var num2 = 10;
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
var value1 = true;
var value2 = false;
console.log("And operator test:");
console.log(value1 && value2); // False
console.log("Or operator test:");
console.log(value1 || value2); // True
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
console.log("Item in array test:");
console.log(array.includes(3)); // True
// Test whether an item is not in an array
console.log("Item not in array test:");
console.log(!array.includes(6)); // True
