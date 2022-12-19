/*
function updateUser(oldUser: any, newUser: any): any {
    return {...oldUser,...newUser};
};
*/

function updateUser<T,V>(oldUser: T, newUser: V): T&V {
    return {...oldUser,...newUser};
};

function makeAdmin<T>(user: T): T {
    return {...user, admin: true};
};

let userAge = 55;
let user1 = {name: 'Junior'};
let user2 = {age: 25, gender: 'M'};
console.log(updateUser(user1,userAge));
console.log(makeAdmin(user2));


// Using generics with classes
class Planet<T> {
    private closestStar: T;
    constructor(closestStar: T){
        this.closestStar = closestStar;
    };
};
const earth = new Planet<string>('Sun');
const planetX = new Planet<{name: string, distance: number}>({name: 'Xorox', distance: 10});



// Using generics with interfaces
interface UserData {
    size: number;
    data: string[];
};
const planetZ = new Planet<UserData>({data: ['Xorox','Xorax'], size: 10});

interface CustomerData<K>{
    size: number;
    data: K[];
};
let newUser1: CustomerData<number>;
newUser1 = {size: 77, data: [23,4,66,80]};
console.log(newUser1);