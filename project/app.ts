let me: string = "Laureline";
console.log(`I am ${me}`);

class Person {
    private name: string;
    constructor( name: string, public username: string ){
        this.name = name
    }
}

var moi = new Person('Lola', '_LolaUsname');
console.log('moi',  moi)