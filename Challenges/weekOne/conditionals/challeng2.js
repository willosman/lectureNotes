let myString = "this is a string";
let myNumber = 10;
let myBoolean = false;
let myArray = [10, "string", []];
let myObject = {firstKey: "a string"}
let myUndefined = undefined;
let myNull = null;

console.log(typeof myNull);

//Bronze
let person = {
    string: "William",
    number: 32,
    boolean: true,
    object: {}
}

console.log(typeof person.boolean);

//Silver
let value = typeof person.string;

if(value === "string") {
    console.log("The value is a string");
} else if (value === "number") {
    console.log("The value is a number");
} else if (value === "boolean") {
    console.log("The value is a boolean");
} else if (value=== "Object") {
    console.log("The value is an object");
} else {
    console.log("What are you?")
}



