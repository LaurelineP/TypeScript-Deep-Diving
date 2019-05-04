alert('solution page');
// Solution 1: Fat arrow
var double = ( value: number ) : number => value * 2;
console.log(`DOUBLE ${double(10)}`);


// Solution 2: Fat arrow
var greet = (name : string = 'Lola') : void => {
    console.log(`NAME: Hello, ${name}`);
}
greet();
greet("Anna");



// Solution 3: Spread operator
var numbers = [-3, 33, 38, 5];
console.log(`MIN:${Math.min(...numbers)}`);



// Solution 4: Spread operator
var newArray = [55, 20];
newArray.push(...numbers);
console.log(`PUSH ARR: ${newArray}`);


// Solution 5: Destructuring arrays
var testResults: number[] = [3.89, 2.99, 1.38];
var [ result1, result2, result3 ]: number[] = [...testResults];
console.log('RESULT (3)', result1, result2, result3);


// Solution 6: OBJ
var scientist: {
    firstName: string,
    experience: number
} = {firstName: "Will", experience: 12};


var {firstName, experience} = scientist;
console.log(`OBJ Bits, ${firstName}, ${experience}`);