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
