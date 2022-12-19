// Regular function
function add(a: number, b: number): number {
    return a + b;
};

// Arrow function
let multiply = (a: number, b: number): number => {
    return a * b;
};
console.log(add(9,6));
console.log(multiply(4,5));


// Optional parameters
function formatName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
};
console.log(formatName('Juan', 'Carvalho'));


// Default parameters
function formatName2(firstName: string, lastName = 'Silva'): string {
    return `${firstName} ${lastName}`;
};
console.log(formatName2('Maria'));
console.log(formatName2('Pedro', 'Souza'));


// Rest parameters
function printNames(firstName: string, ...allTheRest: string[]){
    return firstName + ' ' + allTheRest.join(' ');
};
console.log(printNames('Junior', 'Pedroza', 'Smith', 'Joseph'));


// Function overloading
function addValues(val1: number, val2: number): number;
function addValues(val1: string, val2: string): string;
function addValues(val1: any, val2: any): any {
    return a + b;
};
console.log(addValues(5,8));
console.log(addValues('Juan','Kevin'));