/*
Functions: 
-JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression

- Function declarations are hoisted in our code, and run ONLY when we call them(invoke them). 
So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his or her hand up, waiting to ask a question. That student does not ask the question until the teacher calls upon them. 

-Function expressions are not hoisted, and are generally stored in variables. 

-Functions without names are known as "anonymous functions"
*/

//Function Declaration

// function sayHello() {
//     console.log("Hi");
// }

// // sayHello();

// //Function Expression

// let greetings = function (){
//     console.log("Hello");
// }

// greetings()

/*
Parameters

- Think of parameters as a newly declared variable that we have not given a value to yet. 
    -The value that we pass into our function when we call the function to run (which is known as an argument), is the value that gets assigned to the parameter. 

    - General naming convention for function parameters: The parameter should be something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter "num" or "number"
*/

// function myDog(husky)/*husky is the parameter*/ {
//     console.log(`My dogs name is ${husky}`)
// }

// // myDog("Leslie"); //"Leslie" is the argument"
// // myDog("Peanut");

// function allMyDogs(smallHusky, bigHusky, borderCollie){
//     console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`); //arguments will appear in the order they are called. 
// }

// allMyDogs("Leslie", "Peanut", "Molly");

/*
Return

-functions can also manipulate the data sent to them, and return a new value

-Code below the "return" keyword in {} does not get executed. 
*/

// function calculator(one, two, three){
//     let totalWeight = one + two + three;
//     let average = Math.round(totalWeight / 3);
//     return average;
// }

// let averageWeight = calculator(15, 60, 55);
// console.log(averageWeight);

/*
Arrow Functions

-Arrow functions (or fat arrow function) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations. 

    - This means that arrow functions do NOT get hoisted. 

There are two types of arrow functions: concise body and block body. 
    - The return happens automatically with a concise body arrow functions. 
    - The return does not happen automatically with a block body arrow function. 

*/

//Concise body
// let speak = (name) => console.log(`${name} goes wooof!`);
// speak("Leslie");

// let nameJoiner = (first, last) => `${first} ${last}`; 
// let fullName = nameJoiner("William", "Osman");
// console.log(fullName);

//Block body
// let speak = (name) => {
//     console.log(`${name} goes wooof!`)
// }

//  let nameJoiner = (first, last)/*what ever is listed in the ()*/ */ => {
//      return `${first} ${last}`;/*has to be listed here exactly the same*/ 

// let fullName = nameJoiner("William", "Osman");
    // console.log(fullName);


//Practice I

// function areaRec(area1, area2) {
//     let rectangle = area1 * area2; 
//     let area = Math.round(rectangle);
//     return area;
// }

// let total1 = areaRec(5, 10);
// console.log(total1);

//Practice II


function dogToHumanYears (dogAge) {
    let humanAge = (dogAge -2) * 4 + 21;
    return humanAge 
}

console.log(dogToHumanYears(5));
