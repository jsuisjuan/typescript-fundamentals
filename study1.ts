/* Learning the basics of TypeScript */

/* ------ Type Anotation ------ */

// --> Ways to declar a variable
let lucky = 23; // implicit declaration
let notLucky: number = 23; // explicit declaration

/*
    OBS.: let lucky: any = 23;
        - means that the variable can be any type.

          let declaration: number;
        - just use explicit declaration only when you dont
          alocate any value in the current variable.
*/


// --> Type declaration
type Style = 'bold' | 'italic' | 23;
let font: Style;
font = 'bold';
// the variable can only use the valeus declared
// in that variable


// --> Objects
/*
interface Person {
    first: string;
    last: string;
    [key: string]: any  // an optional attribute
}

/*
const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2: Person = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
}
*/

/*  ------ Function ------ */

function pow(x: number, y: number) {
    return Math.pow(x, y).toString();
}

function max(x: number, y: number): void {
    Math.max(x, y).toString();
}

pow(5, 10)
max(21, 13)

// --> Arrays

const arr: number[] = [];   // it has to be arr type number

arr.push(1);
arr.push(23);
arr.push(0);

// twoplon
type myList = [number?, string?, boolean?];
const arr2: myList = [];

arr2.push(1);
arr2.push('23');
arr2.push(false);

// --> Generics [Learn more about!]

class Observable<T> {
    constructor(public value: T) {} // constructor?
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);