"use strict";
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
