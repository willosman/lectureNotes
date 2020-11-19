/* For Of Loops

- For of loops parse through an iterable list of numbers - so that makes them great for working with arrays

- Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains its own index (starting at 0)

            value
let arr = ["chicken", "turkey", "duck"]
                0       1           2
            index
*/

//Bronze
// let pies = [
//   "apple",
//   "blueberry",
//   "peach",
//   "chocolate peanut butter",
//   "cherry",
//   "oreo",
//   "chicken pot",
//   "shepherd",
// ];

//bronze
for (pie of pies) {
    console.log(`${pie} pie`)
}
​
//silver

// let pies = [
//     "apple",
//     "blueberry",
//     "peach",
//     "chocolate peanut butter",
//     "cherry",
//     "oreo",
//     "chicken pot",
//     "shepherd",
//   ];
for (pie of pies) {
    if (pie.includes("apple")) {
        console.log(`${pie} pie is a fruit pie`)
    } else {
        console.log(`${pie} pie is not a fruit pie`)
    }
}
​
//gold

let pies = [
        "apple",
        "blueberry",
        "peach",
        "chocolate peanut butter",
        "cherry",
        "oreo",
        "chicken pot",
        "shepherd",
      ];
for (pie of pies) {
    if (pie.includes("apple") || pie.includes("blueberry") || pie.includes("cherry") || pie.includes("peach")) {
        console.log(`${pie} pie is a fruit pie`)
    } else {
        console.log(`${pie} pie is not a fruit pie`)
    }
}