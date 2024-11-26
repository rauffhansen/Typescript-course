import { stringArray } from "./type";

function getLastElement(array: stringArray) {
    if (array === null) {
        return null;
    }
    return array[array.length - 1];
}

console.log(getLastElement(["a", "b", "c"])); // c
