
/** INTERFACES WITH CLASS */
// Shaping "structure, model" of your needed obj
interface NamedPerson { 
    firstName: string;                        // the thing you at least require for sure
    age?: number;                             // ask ts to considere a possible age property
    [propName : string] : any;                // ask  ts for any other third argument
    greetSelf: (lastName: string) => void;    // method to handle ( required )
}
// Using Shape in a class
class Person implements NamedPerson {
    firstName = "Lola";
    greetSelf = (lastName: string) => {
        console.log(`Hola, I'm ${this.firstName} ${lastName}`)
    }
}

// Create an instance of this class implementing the interface ( shaper-like )
const me = new Person();
me.greetSelf('Paloma');             // => "Hola, I'm Lola Paloma"





/** INTERFACES WITH FUNCTION TYPE */
interface DoubleValueFunc {
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (val1: number, val2: number) => {
    return (val1 + val2) * 2
}

console.log("myDoubleFunction", myDoubleFunction(10,20));






/** INTERFACES WITH INHERITANCE */
interface AgedPerson extends Person {
    age: number;                     // before age was not required, in THIS instance it is.
}

const oldPerson: AgedPerson = {
    age: 30,
    firstName: 'Noob',
    greetSelf: (lastName: string ='I') => {
        console.log(`Helo, I'm ${firstName} ${lastName}`)
    }
}

console.log('oldperson:', oldPerson);