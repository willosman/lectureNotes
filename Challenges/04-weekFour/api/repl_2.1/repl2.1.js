let url = 'https://rickandmortyapi.com/api/character/';

fetch('https://rickandmortyapi.com/api/character/')
.then((res) => res.json())
.then((json) => console.log(json))