// @ts-nocheck

// String
const string: string = "Hello, world!";
const stringInf = "Hello, world!";

// Number
const number: number = 123;
const numberInf = 123;

// Boolean
const boolean: boolean = true;
const booleanInf = true;

// Array
const array: number[] = [1, 2, 3];
const arrayInf = [1, 2, 3];

// Object
const object: { name: string } = { name: "John" };
const objectInf = { name: "John" };

// Tuble
const tuple: [string, number] = ["John", 123];
const tupleInf = ["John", 123];

// Any
const any: any = "Hello, world!";
const anyInf = "Hello, world!";

// Void
const void_: void = undefined;
const voidInf = undefined;

// Never
const never: never = (() => { throw new Error("Error"); })();
const neverInf = (() => { throw new Error("Error"); })();

// Unknown
const unknown: unknown = "Hello, world!";
const unknownInf = "Hello, world!";

// Null
const null_: null = null;
const nullInf = null;

// Undefined
const undefined_: undefined = undefined;
const undefinedInf = undefined;

// Symbol
const symbol: symbol = Symbol();
const symbolInf = Symbol();

// BigInt
const bigint: bigint = BigInt(123);
const bigintInf = BigInt(123);

// Enum
const enum_: number = 123;
const enumInf = 123;

// Literal
const literal: "Hello" = "Hello";
const literalInf = "Hello";
