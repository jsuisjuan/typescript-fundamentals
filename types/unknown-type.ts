let customerInput: unknown;
customerInput = 10;
customerInput = 'this is another input';

console.log(customerInput);

let customerAge: string;

//customerAge = customerInput as string; // type accertion

if(typeof customerInput === 'string'){
    customerAge = customerInput;
};