// Question 1
const camelLetters = (string: string) => {
    let camelString = "";
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            camelString += string[i].toUpperCase();
        } else {
            camelString += string[i].toLowerCase();
        }
    }
    return camelString;
}

console.log(camelLetters("hello"))
console.log(camelLetters("yo eli"))
console.log(camelLetters("hello???"))
console.log(camelLetters("HELLO"))

// Question 2
