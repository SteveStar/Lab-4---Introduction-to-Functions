console.log("-- Step 1 --");

function greet(name) {
    if (name === ("Kevin")) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Good day!\n\n"); // Bonus
    }

}

greet("Kevin");
greet(" ")
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
        console.log(`${count}\n\n`);
    }
}

const incrementFunc = outerFunction();
incrementFunc();

////// Bonus //////
console.log("-- BONUS --");
function anotherOutFunc() {
    const arr = ["Orange", "Blue", "Green"];
    console.log(`Here are my favorite colors: ${arr}`);

    return function() {
        arr.push("Yellow");
        console.log(`After adding Yellow: ${arr}`);
        
    }
    
}

const colorFunc = anotherOutFunc();
colorFunc();

