"use strict";
// Using Shape in a class
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.firstName = "Lola";
        this.greetSelf = function (lastName) {
            console.log("Hola, I'm " + _this.firstName + " " + lastName);
        };
    }
    return Person;
}());
// Create an instance of this class implementing the interface ( shaper-like )
var me = new Person();
me.greetSelf('Paloma'); // => "Hola, I'm Lola Paloma"
var myDoubleFunction;
myDoubleFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log("myDoubleFunction", myDoubleFunction(10, 20));
var oldPerson = {
    age: 30,
    firstName: 'Noob',
    greetSelf: function (lastName) {
        if (lastName === void 0) { lastName = 'I'; }
        console.log("Helo, I'm " + firstName + " " + lastName);
    }
};
console.log('oldperson:', oldPerson);
