// CLASS DECORATORS
function logged ( constructorFn: Function) {
    console.log('constructorFn', constructorFn)
};

@logged
class Pers {
    name = 'unknown'
}