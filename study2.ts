let message = 'Hello World again';
console.log(message);

let b: number;
const a: number = 10;
b = 24;

// let can be declared without value, but const can't.
// use more let when you'll change more the value
// use more const when you'll change less the value

// --> types
let isBeginner: boolean = true;
let total: number = 0;
let nome: string = 'Juan';
let sentence: string = `My name is ${nome}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Cris', 22]; // tupla

enum Color {red=13, green, blue};
let c: Color = Color.green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'whatever';
console.log(randomValue.name);
//randomValue();
//randomValue.toUpperCase();

let myVariable: unknown = 10; // its similar with 'any' but you've some more declaration to do

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

let g;
g = 10;
g = true;

let d = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

// --> Function
function add(num1: number, num2: number = 10): number { // the 10 is a default value, but you can use '?' to set a optional parameter
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(3,10);
add(5);

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

//-----------------------

interface Person {
    firstName: string;
    lastName?: string;
}



function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

// --> Class and Access Modifiers
class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Juna');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delefating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

