//Bronze
// let FB = 15;

//  if (FB % 5 == 0 && FB % 3 == 0){
//     console.log('Fizz Buzz');
// } else if(FB % 3 == 0){
//     console.log('Fizz');
// } else if (FB % 5 == 0){
//     console.log('Buzz');}

//Silver
// let FB = 15;

// let isDivisibleBy5and3 = FB % 5 == 0 && FB % 3 == 0;
// let isDivisibleBy3 = FB % 3 == 0;
// let isDivisibleBy5 = FB % 5 == 0;

// console.log(isDivisibleBy5);

// switch (true){
//     case FB % 15 == 0:
//         console.log('Fizz Buzz');
//         break;
//     case FB % 3 == 0:
//         console.log('Fizz');
//         break;
//     case FB % 5 == 0:
//         console.log('Buzz');
//         break;
//         default:
//             console.log('Not Fizz or Buzz')
// }

//Gold
let FB = 30;

(FB % 3 === 0 && FB % 5 === 0 ) ?
console.log('Fizz Buzz') : (FB % 5 === 0) ?
console.log('Buzz') : (FB % 3 === 0) ? 
console.log('Fizz') : console.log(FB)

