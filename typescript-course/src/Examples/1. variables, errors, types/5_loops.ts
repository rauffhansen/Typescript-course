// 5_loops.ts

// Welcome to the 10-minute course on loops in TypeScript!

// 1. For Loop
// The for loop is used to execute a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(`For Loop iteration: ${i}`);
}

// 2. While Loop
// The while loop executes a block of code as long as a specified condition is true.
let count = 0;
while (count < 5) {
    console.log(`While Loop iteration: ${count}`);
    count++;
}

// 3. Do-While Loop
// The do-while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
let index = 0;
do {
    console.log(`Do-While Loop iteration: ${index}`);
    index++;
} while (index < 5);

// 4. For-Of Loop
// The for-of loop is used to iterate over iterable objects (like arrays, strings, etc.).
const array = [10, 20, 30, 40, 50];
for (const value of array) {
    console.log(`For-Of Loop value: ${value}`);
}

// 5. For-In Loop
// The for-in loop is used to iterate over the enumerable properties of an object.
const object: { [key: string]: number } = { a: 1, b: 2, c: 3 };
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`For-In Loop key: ${key}, value: ${object[key]}`);
    }
}

// That's it for the basic loops in TypeScript! Practice these loops to get a better understanding of how they work.