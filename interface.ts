interface Computer {
    readonly name: string;
    ram: string;
    size?: number;
    connect(adapter: string): void;
};
let latitude: Computer;
latitude = {
    name: 'Latitude',
    ram: '32GB',
    size: 15,
    connect(adapter: string): void {
        console.log(`Power ON. Connected to adapter ${adapter}`);
    }
};
latitude.connect('Adapter 1');
console.log(latitude);


// Implementation of interface inside a class
interface httpConnection {
    createConnection(url: string): void;
};
class makeConnection implements httpConnection {
    private headers: string[];
    private body: string;
    constructor(headers: string[], body: string){
        this.headers = headers;
        this.body = body;
    };
    createConnection(url: string): void {
        console.log(`Connection created to ${url}`);
    };
};


// Extension of interfaces
interface Patient {
    name: string;
};
interface Client extends Patient {
    rating: number;
};
class Tenant implements Client {
    rating: number;
    name: string;
    constructor(rating: number, name: string){
        this.rating = rating;
        this.name = name;
    };
};


// Defining interface type for function
interface Calculate {
    (number1: number, number2: number): number;
};
let cal: Calculate;
cal = (a: number, b: number) => {
    return a + b;
};
console.log(cal(10,5));