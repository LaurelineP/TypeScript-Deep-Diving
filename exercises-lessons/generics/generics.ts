/* SIMPLE GENERICS */
function echo (data: any){
    return data;
}

console.log('simple string', echo('Lola').length);                  // 4
console.log('simple number', echo(23).length);                      // undefined
console.log('simple object', echo({name: 'Lola', age: 26}).length); // undefined

// Don't get back to you when there is an error such as 23.length 
// --> undefined, so ts doesn't recognize the value within any type


// BETTER GENERICS
/**
 * Applying " <T> " tells typescript this is a generic function 
 * By doing so TS give us a feedback according to the type:
 * to get a better support while writing the code
 */

function betterEcho <T> (data: T){
    return data;
}
// console.log('betterEcho string', betterEcho('Lola').length);                        // 4
// console.log('betterEcho number', betterEcho(23).length);                            // while compiling & typing, error hinting
// console.log('betterEcho object', betterEcho({name: 'Lola', age: 26}).length);       // while compiling & typing, error hinting


// BUILT-IN GENERIC TYPE: Arrays
const testArray : Array<number> = [1.90 , 2];       // generic type between < and >
testArray.push(3);                                  // --> [1.90 , 2, 3]; --> IDE not complaining
// testArray.push('string')                            // --> IDE complaining


// GENERIC TYPES AND ARRAYS
    // Arrays
    function printAll <T> ( all: T[]) {
        all.forEach( element => console.log(' element in arr', element ));
    }
    printAll(['Apple', 'Lemon', 3]);
    // element in arr Apples
    // element in arr Lemon
    // element in arr 3

    // GENERIC TYPES
    const echo2:            <T>(data: T) => T           = betterEcho;
    // usual variable           Type                   Assignation

    echo2                       <string>                 ('Something');
    // calling function echo with a parameter with a type of string

// GENERIC CLASS
    class SimpleMath <T> {
        baseValue: T;
        multiplyValue: T;
        calculate(): number {
            return this.baseValue * this.multiplyValue;
        }
    }

    const simpleMath = new SimpleMath();
    simpleMath.baseValue = 5;
    simpleMath.multiplyValue = 15;
    console.log(simpleMath.calculate());        // returns 75