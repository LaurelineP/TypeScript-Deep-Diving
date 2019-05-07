# TypeScript Deep Diving:
Typescript is like Javascript with superpower. It is still Javascript but definitively  
stronger, much safer since it is more in control about the expected code behavior and values.  
  

As we know, Javascript is poorly typed and uses dynamical typing without really freezing those types 
( meaning you could easily reassign any variable to any type of value which mean it could have a risk to return an unexpected value )
Typescript is a strongly typed language ( as you can imagine due to its name ) and its job is to avoid you to have unexpected outputs or values by giving you a way to take control over the expected value and "shape" of your object and their behaviors.

**What you get from it ?**
- your code will be safer ( side effects wise ) and under control
- your code will be checked as you write ( your code editor will highlight and warn you about your errors )
It needs to be compiled and once it's done it will output a commonJS file for you.


## :pushpin: TYPES:
  Typescript basics types are slightly differents from JavaScript's one:
    -   you can find basics types
    -   slightly differents types "*"
    -   really differents types "\**"
    -   carefull with those "!"


  ####Pattern:
  The declarative typescript pattern:
  - declare your usual js variable,
  - followed by a colon,
  - then the type,
  - and finally, assign your expected value;  
    ```var <NAME> : <TYPE> = <VALUE>```
    

  | Types                               | Patterns examples                                    |
  | ----------------------------------- | -----------------------------------------------------|
  | Boolean                             | ```let bool: boolean = true; ```           |
  | Number                              | ```let num: number = 42;```                |
  | String                              | ```let str: type = "Hello";```             |
  | Array *                             | ```let arr: number[] = [1, 2]```           |
  | Tuple \**                           | ```let tple: [ string, number ]```         |
  | Enum \**                            | ```let _en: { value1, value2, value3 };``` |
  | Any \**                             | ```let anything: any = "anything"; ```     |
  | Object ( & types ) \**              | ```let obj: { prop1: number, prop2: string }```   |
  | Null ( Nullable type ) \*!          | ```let myNull: null = null```              |
  | Function ( args & returned types )\*\*! | ```let func : () => void ( or type )``` |
  | Never                               | ```let handleErr: () => never { throw new Error ('an error')}```|

  
  - __Boolean__: ( true or false )  
      ```typescript let bool : boolean = true;```

  - __Number type__: ( integer, floating, , hexadecimal, binary, octal )  
      ```typescript
      let num: number = 1;
      let float: number = 1.5;
      let hex: number = 0xf00d;
      let binary: number = 0b1010;
      let octal: number = 0x744;```

  - __String__: ( single, double quotes and template string )  
      ```typescript let str : string = 'hello';```

  - __Array type__: ( could be written in two ways ):  
      - elements type array:
          ```typescript
          let list: number[] = [ 1, 2, 3 ];
          ```

      - generic array type:
          ```typescript
          let list: Array<number> = [ 1, 2, 3 ];
          ```

  - __Tuple type__:  
      Are arrays where a fixed number of elements is known,  
      for instance we want an array of two differents type elements not more:
      ```typescript
          let myTuple: [ string, number ];
          myTuple = [ 'hello', 3 ];     // Ok, correctly initialized;
          myTyple = [ 3, 'hello' ];     // Error, wrong initialization;
      ```

  - __Enum type__:  
  It's a declarative way of setting an object with enumerable values corresponding ( self executed function )
      ```typescript
          enum Color { Red, Blue, Green };
          let myColor: Color = Color.Green;       // 2
          let myColor: Color = Color[2];          // green
      ```

  - __Any type__: could host any type of value ( string, number,etc), in last cases;  
    
  - __Function and returned types__:   
  /!\ arguments order matters  
  - when expected return value, assign a sign to the return expected  
  ```typescript
  function returnMyName (): string {  // A string typed expected
      return ('Laureline')            // A string returned
  }
  ```


  - when no returned value are expected: void  
    ```typescript
    function sayHello(): void {
        console.log('calling my console.log');
    }
    ```

  - __Function type__:  
  When expected a function you want to assign a function to a variable  
  with a peculiar pattern ( some typed args and a typed return )  
  ex:  
  ```sayHello``` ( from above ) vs ```myMultiply``` in here:
  ```typescript
      function myMultiply (a: number, b:number ) :number {
          return a  b
      }
  ```
  If I'd like to have a variable holding  peculiar function: such as myMultiply returning a number,
  I don't want to get a function returning something else and this is how it's done: basically by 
  declaring the pattern you need within the function you'll receive:
  ```typescript
      let myOperation: (val1: number, val2: number) => number ( ///!\ name of arg doesn't matter)
      myOperation = sayHello;       // error
      myOperation = multiply;       // get the multiplyfunction within
  ```

  - __Objects and types__:
    /!\ property name matter
    ```typescript
        let userData = {
            name: "Lulu",
            age: 23
        }
    ```
    **Behind the scene typescript is assigning types even though you are not explicitly declaring it**,  
    so when you decide to re-attribute your object it will get you an error;  
    If I reassign another object with different property name: it will get you an error;
    ```typescript
     userData = {
        one: "Lulu",
        two: 23
    } // error
    ```
    
    the blueprint you'll want is:
    ```typescript
    let userData: { name: string, age: number } = {
        name: 'Lulu',
        age: 23
    }
    ```

  - __Never type__: you assign never when you're targetting an error --> it's never returning anything:
      ```typescript
      function neverReturn(): never {
          // should never return anything but an error
          throw new Error('An error!')
      }
      ```

  - __Nullable Types__: ( w/ typescripts 2 )  
  In your config you have a rule saying you can ( true ) or cannot ( false ) allow to attribute null:  
  with property: "strictNullChecks" saying a value could be null or not.  
  Let's set it to --> true (checking null === null type)  
  The idea here is for you to know if what you are manipulating could be null or not and if  
  it is the case, just use the Union type with a single pipe line:   

  /!\ if your variable is not assigned it means that the default value is undefined which is kind  
  of null too but not strictlly true 
  NB: 
  ```typescript
  undefined == null // true
  undefined === null // false
  ```

  From now on you cannot reassign a previously typed variable to null  
  ( because strictNullChecks is true );
  ```typescript
  let myN = 23;
  myN = null     // error
  ```

  ```typescript
  let notDefined;
  notDefined = null         // no error as undefined == null
  ```
  To allow a variable to be nullable if needed :
  ```typescript
      let myN : number | null = 23    // no error
      myN = null                      // no error
  ```

  /!\ CAREFULL when initiating null to a variable cause it will not be possible to reassign another  
  value behing as typescript did typed your variable as null, or you need to overide the 'explicit'  
  rule of your variable to ```any``` or using union type

  Examples of cases: 
  - __Complex Object__:
      ```typescript
      let complex: {data: number[], output: (all: boolean) : number[] }  = {
          data: [1,2,3,5],
          output: ( all : boolean ) : number => this.data
      }
      ```

  - __Custom types__: with type Aliases to store a pattern of type:
  You create a type alias by declaring "type and the name followed by an equal as you're creating a new type":
    ```typescript
    type Complex = { data: number[], output: (all: boolean) : number[] };
    ```
  Like so you could assign this complex typed Type to a new variable:
  ```typescript
  let complex2: Complex = {
      //...
  }
  ```

  - __Multiple possible types__:  
  Allowing differents possible values with **union type**  --> ( kind of "OR" operator with one pipe line);
  ```typescript
  let myAge: number | string = 23;
  ```


## :wrench: TYPESCRIPT - BEHIND THE SCENES:
First of all we have to know there is an whole behinds-scenes-process happening when you  
run ```tsc```.
Let's refresh : ```tsc``` command here is looking for every typescript files in order to compile them into commonJS files.  
By doing it that it checks for possible errors made while you write your code.
If any errors : you'll get a message error, however typescript compiled into commonJS anyway but good news: you can have a word to say on its behavior, and this, through the tsconfig.json.

### [Configuration:](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

| Properties              | Functions                                                                 |
|-------------------------|---------------------------------------------------------------------------|
|```noEmitToError```:     | *boolean* — if true, will build js files if no errors 
|```noImplicityAny```:    | *boolean* — if true, ts warns you that by just declaring a variable without anything, it's type is by default set to any |
|```sourceMap```:         | *boolean* — if true and compile your project, it will create a ```.map``` file which allow you to have access to your ts file within your browser and debug with your devTool.|
|```noUnusedParameters```:| *boolean* — if true, ts warns you about parameters not used ( for cleaner code )  |

... and so much more on the link.


## :pushpin: NAMESPACE & MODULES
Namespace in typescript are "container" named to wrap anything you want to export as a module avoiding to pollute your code or just for better organize your app by splitting it.

    ```typescript
    namespace myMath {
        export const add2 = ( value: number ) => value * 2;

        export const square = ( value: number ) => value * value;

        // NB: from within, your functions are accessible
    }
    // NB: from outside your namespace, your functions are not accessible despite pointing the the function with dot notation tight to your namespace
    ```

At this point we will need interract with this namespace.
with 2 steps : 
    - importing to app.js:
        ```typescript
        /// <reference path='../exercises/module_classes_exercises/classes_solutions.ts'/>
        ```
    - running your cli with ```--outFile```:
        ```typescript
        tsc --outFile app.js <namespace-file-name>
        ```

If no importing the namespace into your main js file,  
use the cli to with --outFile like above followed by   
all namespace files you need.

## :pushpin: MODULES: IMPORT AND EXPORT
This is indeed all about ES6 Syntax import and export topics ( seen w/ react and webpack )
If we do use export and import naively we will get an ```uncaught error: export is not a valid function ``` : client side cause of the module loader we don't have (such as babel in react)

Doing without webpack, use ```systemjs.``` so we need to install it:
``` npm install systemjs````

and need to adjust our current config ( NOT WORKING WITH CURRENT V)
- In index.html adjust your script src path and add the following script:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/3.0.0/system.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/3.0.0/extras/named-register.min.js"></script>
...
<script>
    // setting our baseURL reference path
    System.import('app.js');
</script>
```

### Differences between namespaces and modules:
| NAMESPACES                                | MODULES                                   |
|-------------------------------------------|-------------------------------------------|
| Organize application w/ JS objects        |  Organize app w/ real modules             |
| Can split up in multiple files            |  Can be split up in multiple files        |
| No module loader required                 |  Module loader required                   |
| Dependencies get messy in code & difficult to manage|Dependencies are explicit, easy to manage|
| Good & enough for small app               | Good for intermediary and bigger app      |



## :pushpin: INTERFACES
Interfaces are working with contract: meaning interfaces garantee you to have at least one property required within an object

Shaping as type alias:
```typescript
interface NamedPerson { 
    firstName: string;                      // property (required): the property you at least require for sure
    age?: number;                           // optional property: let consider a possible age property
    [propName: string] : any;               // optional property unknown: let consider third property
    greetSelf: (lastName: string): void;    // method (requiered): a method also required
}
```
With Class:
Applying to a class:
```typescript
class Person implements NamedPerson {
    firstName = "Lola";
    greetSelf = (lastName: string) => {
        console.log(`Hola, I'm ${this.firstName} ${this.lastName}`)
    }
}
```

Create a new person with this class implementing the interface shaping:
```typescript
const myself = new Person();
myself.greetSelf('Paloma');
```


With function type:
```typescript
interface DoubleValueFunc {
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (val1: number, val2: number) => {
    return (val1 + val2) * 2
}

console.log("myDoubleFunction", myDoubleFunction(10,20));
```


With Inheritance:
Inheritance allows you to get the inheritance of a class, but adding id a variation to it like so:
```typescript
interface AgedPerson extends Person {
    age: number;                     // before age was not required, in THIS instance it is.
}

const oldPerson: AgedPerson = {
    age: 30,
    firstName: 'Noob',
    greetSelf: (lastName: string ='I') => {
        console.log(`Helo, I'm ${firstName} ${lastName}`)
    }
}

console.log('oldperson:', oldPerson);
```