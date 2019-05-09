"use strict";
// class Map <S extends string, T> {
//     key;
//     value;
//     setItem (key: S, value:T): void {
//         this.key = 'key';
//         this.value = value;
//     }
//     clear (): any {
//         return [];
//     }
//     printMap (): [S,T] {
//         return [this.key, this.key];
//     }
// }
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this.map[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var el in this.map) {
            console.log(el, this.map[el]);
        }
    };
    return MyMap;
}());
var a = new MyMap();
console.log('assign', a.setItem('lessons', 1));
console.log('assign', a.setItem('plays', 19));
console.log('get lessons', a.getItem('lessons'));
console.log('printing', a.printMap());
console.log('clearing', a.clear());
console.log('printing empty', a.printMap());
console.log('assign', a.setItem('miam', 78));
console.log('printing last', a.printMap());
