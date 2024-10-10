console.log("-- Step 1 --");

function greet(name) {
    console.log(`Hello, ${name}!\n\n`);
}

greet("Kevin");
//////////////////////////////////////////////////////
console.log("-- Step 2 --");

function addNumbers(num1, num2) {
    return num1 + num2;

}

console.log(`The sum is: ${addNumbers(4,5)}\n\n`);
//////////////////////////////////////////////////////
console.log("-- Step 3 --");
let x = 10;

function changeValue() {
    let x = "A new value!\n\n"
    console.log(x);
}
changeValue();
//////////////////////////////////////////////////////
console.log("-- Step 4 --");

function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

const incrementFunc = outerFunction();
incrementFunc();