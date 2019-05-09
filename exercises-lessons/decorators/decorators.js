"use strict";
// CLASS DECORATORS
function logged(constructorFn) {
    console.log('constructorFn', constructorFn);
}
;
// @logged
// class Pers {
//     name = 'unknown'
// }
