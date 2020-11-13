function hello(){
    console.log("Hello World!");
}
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was:", num);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x,y){
    console.log(x+y);
}

addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6,11);
addAnyTwoNumbers(7,8);

function subtractTwoNumbers(firstNum,secondNum){
    console.log(firstNum-secondNum);
}

subtractTwoNumbers(5,7)

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250,91));

function sumOfTwoNumbers(x,y){
    console.log(x+y);
}
sumOfTwoNumbers(10,10)

function fullName(first,last){
    let wholeName= first + "" +last;
    return wholeName;
}
console.log(fullName("Will", "Osman"));

function calculatePriceTv(quantity, price){
    let totalPrice= 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePriceTv(1,500));

