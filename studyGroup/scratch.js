// function areaOfATriangle(height,base){
//     (height*base)/2
//     console.log((height*base)/2)
// }

// areaOfATriangle(5,7);

// /* OR */

// function areaTri(height,base){
//     return (height*base)/2
// }
// console.log(areaTri(5,7));

// //Area of a trapezoid

// function areaTrap(bOne, bTwo, height){
//     let area = ((bOne+bTwo)/2)*height;
//     console.log(area);
// }

// areaTrap(1,2,3);

function sumOfNumbers(startNum, endNum) {
  let subTotal = 0;
  for (i = startNum; i <= endNum; i++) {
    subTotal += i; 
  }
  return subTotal;
}

console.log(sumOfNumbers(1,100));
console.log(sumOfNumbers(35,77));
console.log(sumOfNumbers(234,567));
