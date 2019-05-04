"use strict";
alert('solution page');
// Solution 1: Fat arrow
var double = function (value) { return value * 2; };
console.log("DOUBLE " + double(10));
// Solution 2: Fat arrow
var greet = function (name) {
    if (name === void 0) { name = 'Lola'; }
    console.log("NAME: Hello, " + name);
};
greet();
greet("Anna");
// Solution 3: Spread operator
var numbers = [-3, 33, 38, 5];
console.log("MIN:" + Math.min.apply(Math, numbers));
// Solution 4: Spread operator
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log("PUSH ARR: " + newArray);
// Solution 5: Destructuring arrays
var testResults = [3.89, 2.99, 1.38];
var _a = testResults.slice(), result1 = _a[0], result2 = _a[1], result3 = _a[2];
console.log('RESULT (3)', result1, result2, result3);
// Solution 6: OBJ
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log("OBJ Bits, " + firstName + ", " + experience);
