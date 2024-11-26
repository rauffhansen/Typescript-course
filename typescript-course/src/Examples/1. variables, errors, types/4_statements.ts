// 4_statements.ts

// 1. Variable Declarations
let message: string = "Hello, TypeScript!";
const pi: number = 3.14;

// 2. Conditional Statements
let age: number = 25;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 3. Switch Statements
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// 4. Loop Statements
// For Loop
for (let i: number = 0; i < 5; i++) {
    console.log(`For Loop iteration: ${i}`);
}

// While Loop
let count: number = 0;
while (count < 5) {
    console.log(`While Loop iteration: ${count}`);
    count++;
}

// Do-While Loop
let num: number = 0;
do {
    console.log(`Do-While Loop iteration: ${num}`);
    num++;
} while (num < 5);

// 5. Function Declarations
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 6. Arrow Functions
const add = (a: number, b: number): number => a + b;
console.log(add(5, 3));

// 7. Try-Catch Statements
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred: ", error);
}