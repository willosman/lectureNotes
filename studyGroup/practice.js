//Write a JavaScript program that accepts two integers and displays the larger. 

// let x = 10;
// let y = 5;

// if (x > y) {
//     console.log(x);
// } else {
//     console.log(y);
// }

// function biggerNumber(x,y){
//     if (x>y){
//         return x;
//     } else {
//         return y;
//     }
// }

// let tryOne = biggerNumber(13,4);
// console.log(tryOne);

// function name(parameter){
//     //code block
// }

// name(arguement)

//Fizz Buzz
 
// function fizzBuzz(){
//     for(let i = 100; i <= 200; i++){
//         if( i % 3 === 0 && i % 10 === 0){
//             console.log("Fizz Buzz" + i);
//         } else if (i % 3 === 0){
//             console.log("Fizz" + i);
//         } else if (i % 10 === 0){
//             console.log("Buzz" + i);
//         } else {console.log(i);}
//     }
// }

// fizzBuzz();

//Gumball Machine

// function gumballMachine(coin){
//     if (coin === 'quarter'){
//         return 'Gumball. Yummy!'
//     } else { 
//         return 'Please insert a quarter'
//     }
//     }

//     console.log(gumballMachine('quarter'));
//     console.log(gumballMachine('nickel'));

// function coinFlip(){
    
// }
// coinFlip();

//Write a loop that prints each username in the array
let users = ['sa11ySm!th', 'dogmom123', 'webDev2020', 'adminUser' ]

for (let i=0; i < users.length; i++){
    console.log(users[i]);
    greeting(users[i]);
}

function greeting(username){
    console.log(`Welcome Back ${username}`);
}