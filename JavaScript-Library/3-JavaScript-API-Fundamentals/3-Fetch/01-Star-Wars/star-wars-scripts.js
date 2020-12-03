let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people') 
.then(function(response) { 
   return response.json();
})
.then(function(json){
    let people = json.results;

    for(p of people) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }

});

let starWarsPlanetList = document.querySelector('ul');

fetch('https://swapi.dev/api/planets')
.then(function(results) {
    return results.json();
})
.then(function(json){
    let planets = json.results;

    for(p of planets){
        let listItem2 = document.createElement('li');
        listItem2.innerHTML = '<p>' + p.name + '</p>';
        starWarsPlanetList.appendChild(listItem2);
    }
})
