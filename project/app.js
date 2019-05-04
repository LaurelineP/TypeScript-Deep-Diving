"use strict";
var me = "Laureline";
console.log("I am " + me);
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var moi = new Person('Lola', '_LolaUsname');
console.log('moi', moi);
