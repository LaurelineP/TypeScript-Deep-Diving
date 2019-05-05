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
var classes;
(function (classes) {
    // Solution 1
    var Car = /** @class */ (function () {
        function Car(name) {
            var _this = this;
            this.acceleration = 0;
            this.honk = function () { return console.log('Tooooooooot!'); };
            this.accelerate = function (speed) {
                _this.acceleration = _this.acceleration + speed;
            };
            this.name = name;
        }
        return Car;
    }());
    var car = new Car("BMW");
    // Solution 2
    var BaseObject = /** @class */ (function () {
        function BaseObject() {
            var _this = this;
            this._width = 0;
            this._height = 0;
            this._calcSize = function () { return _this._width * _this._height; };
        }
        Object.defineProperty(BaseObject.prototype, "width", {
            get: function () { return this._width; },
            set: function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "height", {
            get: function () { return this._height; },
            set: function (value) {
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "calcSize", {
            get: function () { return this._calcSize(); },
            enumerable: true,
            configurable: true
        });
        return BaseObject;
    }());
    ;
    var rectangle = new BaseObject;
    console.log('rect', rectangle);
    // Solution 3
    var Person = /** @class */ (function () {
        function Person(name) {
            this.enumerable = true;
            this.configurable = true;
            this._firstName = '';
            this._firstName = name.length > 3 ? name : "";
        }
        Object.defineProperty(Person.prototype, "firstName", {
            get: function () { return this._firstName; },
            set: function (value) {
                this._firstName = value.length > 3 ? value : '';
            },
            enumerable: true,
            configurable: true
        });
        ;
        return Person;
    }());
    var aperson = new Person('ma');
    console.log('-aperson-', aperson);
    var lola = new Person('Lola');
    console.log('-lola-', lola);
})(classes || (classes = {}));
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
/**
 * Should have no error and output in js file after tsc cmd:
 *
 *
 * var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
    };
    var myself = {
        name: "Max",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);

 */ 
/// <reference path='../exercises/module_classes_exercises/classes_solutions.ts'/>
