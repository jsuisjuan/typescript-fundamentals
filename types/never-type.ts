let myFruit: never;

function alwaysProcessing(): never {
    while(true){
        console.log('I am processing...');
    };
};

function throwAnException(message: string): never {
    throw new Error(message);
};

throwAnException('exception occurred');