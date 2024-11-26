// 3_conditions.ts

// Introduction to Conditions in TypeScript

// 1. If-Else Statement
let num: number = 10;

if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less");
}

// 2. If-Else If-Else Statement
let score: number = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 3. Ternary Operator
let age: number = 18;
let canVote: string = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 4. Switch Statement
let day: number = 3;
let dayName: string;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Day: ${dayName}`);

// 5. Using Conditions with Types
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

let user: User = {
    name: "Alice",
    age: 25,
    isAdmin: true,
};

if (user.isAdmin) {
    console.log(`${user.name} has admin privileges`);
} else {
    console.log(`${user.name} does not have admin privileges`);
}

// Conclusion
// Conditions in TypeScript are similar to JavaScript but with type safety.
// Use if-else, ternary operators, and switch statements to control the flow of your program.