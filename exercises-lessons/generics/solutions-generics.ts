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

class MyMap <T> {
    private map: { [key: string]  : T} = {};

    setItem( key: string, value: T): void {
        this.map[key] = value;
    }

    getItem (key: string) : T {
        return this.map[key];
    }

    clear () : void {
        this.map = {};
    }

    printMap () : void {
        for ( let el in this.map){
            console.log(el, this.map[el])
        }
    }
}

const a = new MyMap<number> ();
console.log('assign',a.setItem('lessons', 1));
console.log('assign',a.setItem('plays', 19));
console.log('get lessons', a.getItem('lessons'));
console.log('printing', a.printMap());
console.log('clearing', a.clear());
console.log('printing empty', a.printMap());
console.log('assign',a.setItem('miam', 78));
console.log('printing last', a.printMap());





