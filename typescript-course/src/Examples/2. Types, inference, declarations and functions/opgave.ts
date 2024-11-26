// Make a function that takes a array of strings, and gives back the last element of the array. If the array is empty, return null.
// Make a type that can be either a string array or null.
// Use this type for the function parameter and return type.
// Use type assertion to make sure that the array is not null before returning the last element.
// Test the function with and without null.
// Use the function in a console.log statement.

type stringArray =  string[] | null;

function getLastElement(array: stringArray) {
    if (array === null) {
        return null;
    }
    return array[array.length - 1];
}

console.log(getLastElement(["a", "b", "c"])); // c
