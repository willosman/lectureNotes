let button = document.getElementById('button');

button.addEventListener('click', buttonClick)

function buttonClick(){
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(
        function(res){
            return res.text
        }
    )
}