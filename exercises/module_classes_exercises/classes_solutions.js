"use strict";
// // Solution 1
// class Car {
//     name: string;
//     acceleration: number = 0;
//     constructor ( name: string ){
//         this.name = name;
//     }
//     honk = () : void => console.log('Tooooooooot!');
//     accelerate = (speed: number) : void => {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
// // Solution 2
// class BaseObject {
//     _width: number = 0;
//     _height: number = 0;
//     _calcSize = () : number => this._width * this._height;
//     get width () { return this._width }
//     get height () { return this._height }
//     get calcSize () { return this._calcSize() }
//     set height (value: number) {
//         this._height = value
//     }
//     set width (value: number) {
//         this._width = value
//     }
// };
// let rectangle : BaseObject = new BaseObject;
// // Solution 3
// class Person {
//     enumerable: boolean = true;
//     configurable: boolean = true;
//     private _firstName: string = '';
//     constructor ( name: string ){
//         this._firstName = name;
//     }
//     get () { return this._firstName };
//     set ( value: string ){
//         this._firstName = value.length > 3 ? value : '';
//     }
// }
