/*
HOISTING

Hoisting was thought up as a general way of thinking about how our code is compiled and executed. 
 - there are two general phases that happen when we run our code: 
    - creation phase: any variable (var, let, const) and functions in our code are stored to memory. 
    - execution phase: values are assigned to the variables and functions that were stored to memory during the creation phase

    (what's on the left side of the = is what's stored to memory during the creation phase) ---> let hoisted = true <----- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)

- Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and sotred away in memory. 

- when our code is read, the file is read top to bottom, line by line, in sequential order. 
*/

// goodBye();
// var hello ="hello";
// console.log(hello);

// function goodBye() {
//     console.log("goodbye")
// }

// let name = "Will";
// console.log(name);

/* __________________________________________________________________________________________________________________________________________________*/

/*
SCOPE
*/

// var coffeeType = "dark roast"; //Global Scope (always outside)

// function exampleFunction(){
//     let coffeeType = "vanilla Roast"; //Local Scope is within the {}
//     console.log(coffeeType);
// }

// exampleFunction();

// console.log("Outside the function", coffeeType);

//"var scope" goes to the nearest FUNCTION block (or curly brackets {}) 
// "let scope" just goes to the nearest block
var x = "Will"

function scope() {
    var x = "world";
    if (true == true) {
        let x = "Hello"
        console.log("from if statement", x);
    }
    console.log("from function", x);
}
scope();

console.log("from outside the function", x);