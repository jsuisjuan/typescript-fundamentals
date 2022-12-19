class Person {
    // private readonly name: string; you can set just one time and change no more
    constructor(private id: number, protected name: string){};
    printNameInCaps(){
        console.log(`Name is all caps: ${this.name.toUpperCase()}`);
    };
};

class usCitizen extends Person {
    constructor(id: number, name: string, private ssn: string){
        super(id, name);
    };
    rename(newName: string){
        this.name = newName;
    };
    printNameInCaps(): void {
        console.log(`In USCitizen Class >> Name in all caps: ${this.name.toUpperCase()}`);
    };
};

const junior = new usCitizen(10,'Junior','22342');


// Classes with getters and setters
class Car {
    static MAX_NUM_OF_WHEELS = 6;
    constructor(private make: string, private model: string){};
    set carMakeS(value: string){
        this.make = value;
    };
    get carMakeG(){
        return this.make;
    };
    static carStats(mile: number){
        console.log(Car.MAX_NUM_OF_WHEELS);
        return {mileage: mile, type: 'Hybrid'};
    };
};

const acura = new Car('Acura','TL');
console.log(acura.carMakeG);
acura.carMakeS = 'Honda';
console.log(acura.carMakeG);
console.log(Car.MAX_NUM_OF_WHEELS);
console.log(Car.carStats(10));


// Abstract classes
abstract class Animal {
    constructor(private name: string){};
    abstract printSound(sound: string): void;
};

class Dog extends Animal {
    printSound(sound: string): void {
        console.log('bark...');
    };
};

// const blaki = new Animal('Blaki'); you can't create a animal class because it's abstract
const blaki = new Dog('Blaki');
blaki.printSound('Barking....');
