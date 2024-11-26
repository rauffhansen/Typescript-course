// @ts-nocheck
// Variables in TypeScript

// 1. Declaring variables with `let` and `const`
// `let` allows you to reassign values
let myVariable: string = "Hello, TypeScript!";
myVariable = "Hello, World!";

// `const` is used for variables that won't be reassigned
const myConstant: number = 42;
// myConstant = 50; // This will cause an error

// 2. Type Annotations
// You can specify the type of a variable
let myString: string = "This is a string";
let myNumber: number = 123;
let myBoolean: boolean = true;

// 3. Type Inference
// TypeScript can infer the type based on the assigned value
let inferredString = "Inferred as string"; // TypeScript infers this as a string
let inferredNumber = 456; // TypeScript infers this as a number

// 4. Arrays
// You can define arrays with specific types
let stringArray: string[] = ["one", "two", "three"];
let numberArray: number[] = [1, 2, 3];

// 5. Tuples
// Tuples allow you to define an array with fixed types and lengths
let myTuple: [string, number] = ["Hello", 10];

// 6. Enums
// Enums allow you to define a set of named constants
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;

// 7. Any
// The `any` type allows you to store any type of value
let anyVariable: any = "Could be anything";
anyVariable = 10; // Now it's a number
anyVariable = true; // Now it's a boolean

// 8. Union Types
// Union types allow a variable to hold more than one type
let unionVariable: string | number;
unionVariable = "Could be a string";
unionVariable = 123; // Or a number

// 9. Type Aliases
// Type aliases allow you to create custom types
type StringOrNumber = string | number;
let aliasVariable: StringOrNumber;
aliasVariable = "Alias as string";
aliasVariable = 789; // Or a number

// 10. Null and Undefined
// Variables can be explicitly set to `null` or `undefined`
let nullVariable: null = null;
let undefinedVariable: undefined = undefined;

console.log("TypeScript Variables Example Completed!");