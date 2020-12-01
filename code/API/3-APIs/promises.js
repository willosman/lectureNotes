// setTimeout(() => console.log('this is a test of timeouts!'), 1000);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
})

promise
.then(blah => console.log(blah)) //blah = 'success' in this case
.catch(err => console.log(err)); //err = 'failure' in this case

console.log('this code is after our promise & .then chain!');

function playFunc(){
    return 5;
}

console.log(playFunc());