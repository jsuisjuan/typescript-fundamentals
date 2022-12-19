let userType: 'USER' | 'ADMIN';
userType = 'ADMIN';
userType = 'USER';

function saveUser(userId: number, type: 'USER' | 'ADMIN'): void {
    if (type === 'USER'){
        console.log(`Saving new user: \n ${userId}, ${type}`);
    } else {
        console.log(`Saving new admin: \n ${userId}, ${type}`);
    };
};

saveUser(10, 'ADMIN');
saveUser(50, 'USER');

type BINARY = 0 | 1;
let clientId: BINARY;
clientId = 0;
clientId = 1;