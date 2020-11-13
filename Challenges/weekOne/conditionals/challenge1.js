//******** Relational Operators ********

//Greater Than: >
//Less Than >
//Less Than or Equal To <=
//Greater Than or Equal To >=


//******** Logical Operators ********

// AND: &&
// OR: ||


//******** Logical Operators ********
//Equal: ==
//Not Equal: !=

//***** Strict ****
//Equal: ===
//Not Equal: !==

let age = 19;

if (age>=21){
console.log('Yes! You can purchase alcohol');
} else {
    console.log('No alcohol for you!!!');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bronze
let myName = 'William';
let friendName = 'Matt';

console.log(myName.length);
console.log(friendName.length);

//Silver
if (myName.length >= friendName.length){
    sentence = "My name is longer than" + friendName;
    console.log(sentence);
} else {
    sentence = `${friendName}'s name is longer than ${myName}`
    console.log(sentence);
}

//Gold
const myName = 'William';
console.log(myName.length);

const friendName = 'Matt';
console.log(friendName.length);
let sentence;

if(myName.length > friendName.length) {
    sentence = "My name is longer than" + friendName;
    console.log(sentence);
}
