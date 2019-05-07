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