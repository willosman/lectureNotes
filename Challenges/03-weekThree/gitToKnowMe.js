let breakoutRoom2= [{
    name: "Griggs, Kenneth",
    age: 27,
    graduatedHSYear: "2012",
    pets: true,
    petsNames: ['Gunter', 'Archie'],
    mostRecentedMovieWatched: 'Solo',
    carsOwned: [{
        make:'Ford',
        model: '03 Escape',},
        {
        make: 'Chevrolet',
        model: 'Equinox',
        }],
    favoritePotato: "Yukon Gold",
},
    {name: "Osman, Will",
    age: 32,
    graduatedHSYear: "2007",
    pets: true,
    petsNames: ['Leslie'],
    mostRecentedMovieWatched: 'The Queens Gambit',
    carsOwned: [{
        make:'Jeep',
        model: '2017 Grand Cherokee',},
        {
        make: 'Honda',
        model: '2000 Civic',
        }],
    favoritePotato: "Mashed",
},
    {name: "Hunt, Jen",
    age: 32,
    graduatedHSYear: "2006",
    pets: true,
    petsNames: ['Ace'],
    mostRecentedMovieWatched: 'Schitts Creek',
    carsOwned: [{
        make:'Chevrolet',
        model: '2009 Malibu',},
        {
        make: 'Pontiac',
        model: '2004 Sunfire',
        }],
    favoritePotato: "Curly FF",
},
    {name: "Mills, Hayden",
    age: 27,
    graduatedHSYear: "2012",
    pets: false,
    petsNames: ['NA'],
    mostRecentedMovieWatched: 'The Grinch',
    carsOwned: [{
        make:'Toyota',
        model: '2004 Rav 4',},
        {
        make: 'Dodge',
        model: '2002 Durango'
        }],
    favoritePotato: "McDonalds fries",
},
    {name: "Walls, Eva",
    age: 45,
    graduatedHSYear: "1993",
    pets: false,
    petsNames: [''],
    mostRecentedMovieWatched: 'Run',
    carsOwned: [{
        make:'Subaru',
        model: '2014 Crosstrek XV',},
        {
        make: 'Honda',
        model: '2006 CRV'
        }],
    favoritePotato: "scalloped",
} ];
/*
 After you create the array of objects, loop through the array to grab the mostRecentMovieWatched for each person object and PUSH those values to a GLOBAL moviesWatched variable which should be an array.
*/
// console.log(breakoutRoom2[0].mostRecentedMovieWatched);
let globalMovies = [];
for (person in breakoutRoom2) {
    console.log(person);
    globalMovies.push(breakoutRoom2[person].mostRecentedMovieWatched);
    // breakoutRoom2[person].mostRecentedMovieWatched.push(globalMovies);
};
// console.log(globalMovies);
//-----------------------------------------
// for (i = 0; i < breakoutRoom2.length; i++) {
//     console.log(i);
//     globalMovies.push(breakoutRoom2[i].mostRecentedMovieWatched);
// }
// console.log(globalMovies);
//-----------------------------------------
// for (person of breakoutRoom2) {
//     console.log(person);
//     globalMovies.push(person.mostRecentedMovieWatched);
// };
// console.log(globalMovies);